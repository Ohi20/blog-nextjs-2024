import React from 'react';
import Link from 'next/link';

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className="p-3 cursor-pointer outline-none bg-[#b64a13] text-white rounded">
        {text}
      </button>
    </Link>
  );
};

export default Button;