import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import connectMongoDB from '@/libs/mongodb';
import User from '@/models/user';


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',

      async authorize(credentials) {
        // check user exists
        await connectMongoDB();

        try {
          const user = await User.findOne({
            email: credentials.email,
          });

          if (user) {
            // check password
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error('Wrong Credentials!');
            }
          } else {
            throw new Error('User not found!');
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],

  pages: {
    error: '/login',
  },
});

export { handler as GET, handler as POST };