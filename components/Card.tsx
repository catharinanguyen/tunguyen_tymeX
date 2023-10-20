import Image from "next/image";
import React from "react";

export type CardProps = {
  name: string;
  rank: string;
  favorite?: boolean;
  image: string;
  price: number;
  artistName: string;
  artistImage: string;
};
const Card = ({
  name,
  rank,
  favorite,
  image,
  price,
  artistName,
  artistImage,
}: CardProps) => {
  return (
    <div className="card">
      <div className="relative mb-6 bg-gradient-to-r from-[#DD5AFE] to-[#6366F1]">
        <div className="flex items-end justify-center min-h-[233px]">
          <Image src={image} width={235} height={197} alt="hero" />
        </div>
        <div className="absolute top-2 left-[50%] -translate-x-[50%] w-full p-2">
          <div className="flex justify-between items-center">
            <span className="rank text-[12px] bg-rank-bg/50 rounded-[4px] py-[4px] px-[12px] inline-block">
              {rank}
            </span>
            <Image src="/heart.svg" alt="heart" width={24} height={24} />
          </div>
        </div>
      </div>
      <div className="card-info">
        <div className="card-name">{name}</div>
        <p className="card-name">{price}ETH</p>
      </div>
      <div className="card-artist flex items-center">
        <div className="card-artist__image mr-2">
          <Image src={artistImage} alt="artist name" width={32} height={32} />
        </div>
        <span className="artist-name">{artistName}</span>
      </div>
    </div>
  );
};

export default Card;
