import React from 'react';

type Props = {
  name: string;
  image: string;
  url: string;
};

const Card = ({ name, image, url }: Props) => (
  <a href={url} target="_blank" rel="noreferrer">
    <div className="grid grid-cols-3 gap-3 bg-slate-200 w-52 rounded-lg shadow-md">
      <div className="p-1">
        <img src={image} alt="" className="" />
      </div>
      <div className="flex justify-start items-center col-span-2">
        <div className="text-2xl">{name}</div>
      </div>
    </div>
  </a>
);

export default Card;
