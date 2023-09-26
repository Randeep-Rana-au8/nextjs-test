'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Images = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      await fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((data) => setPhotos(data.slice(0, 500)));
    };

    fetchImages();
}, []);
console.log(photos)

  return (
    <div>
      {photos.map((item: { title: string; description: string, thumbnailUrl: string }) => (
        <div key={item.title}>
            <Image src={item.thumbnailUrl} width={150} alt={item.title} height={150} />
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Images;
