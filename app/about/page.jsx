import React from 'react';
import Image from 'next/image';
import chess from 'public/chess.jpg';
import { faChess } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@/components/Button/Button';


const About = () => {
  return (
    <div className="px-12">
      <div className="w-full h-[300px] relative">
        <Image
          src={chess}
          fill={true}
          alt="About Hero"
          className="object-contain sepia"
        />
        <div className="absolute bottom-4 left-4 p-4 bg-[#b64a13] text-white">
          <h1 className="">Digital Chesstalkers <span><FontAwesomeIcon icon={faChess} /></span></h1>
          <h2 className="">Handcrafting blogs,position,events and digital experiences</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
        <div className="flex-1 flex flex-col gap-5 mt-8">
          <h1 className="text-[#b64a13] text-3xl font-bold">Who Are We?</h1>
          <p className="text-md font-semibold text-justify">
          Our mission is to help people enjoy their lives through the game of chess. As a platform for online chess, we are focused on growing the game by building great products, making learning and improving easier, and delivering great chess content and events to our fans.We recognizes those who give their time to help make Chess an even better place. From moderating live chess chats to the forums, bringing chess content to twitch for others to enjoy and and even to hours of relaying the top chess games from top chess events. 
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-5 mt-8">
          <h1 className="text-[#b64a13] text-3xl font-bold">What We Do?</h1>
          <p className="text-md font-semibold text-justify">
          We believe that everyone deserves to be treated with respect. We encourage everyone to follow the golden rule of treating others.You never lose when you learn! Life and chess are both about learning, growing, experimenting, failing and then getting back up again with greater knowledge and understanding.We believe in fun, smiles, laughter, and in creating enjoyable experiences for everyone. Chess can be pure joy! The beauty of the game and the pure satisfaction of moving chess pieces around a board.
          </p>
          <Button url="/contact" text="contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
