import React from 'react';
import css from "./ImageCard.module.css";

interface Item {
  id: string;
  urls: {
    small: string;
  };
  description: string | null;
}

interface ImageCardProps {
  item: Item;
  onClick: (item: Item) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, onClick }) => {
  const handleClick = () => {
    onClick(item);
  };

  return (
    <li key={item.id} className={css.imageCard}>
      <img
        onClick={handleClick}
        src={item.urls.small}
        alt={item.description ?? 'Image'}
        className={css.img}
      />
    </li>
  );
};

export default ImageCard;
