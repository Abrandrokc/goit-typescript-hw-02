import React from 'react';
import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

interface Item {
  id: string;
  urls: {
    small: string;
  };
  description: string | null;
}

interface ImageGalleryProps {
  items: Item[];
  onClick: (item: Item) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onClick }) => {
  return (
    <ul className={css.ul}>
      {items.map((item) => (
        <ImageCard key={item.id} item={item} onClick={onClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;
