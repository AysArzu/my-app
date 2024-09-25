import React from "react";
import imagesData from "../08-image-gallery/data.json";
import { GalleryItem } from "./gallery-item";
import "./gallery.scss";

export const Gallery = () => {
  return (
    <div className="gallery">
      <h1>Image Gallery</h1>
      
      <div className="images">
        {imagesData.map((item) => (
          <GalleryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
