import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFirestore from '../hooks/useFirestore';

const PhotoDetailPage = () => {
  const { id } = useParams(); // Get the photo ID from the URL params
  const { docs: images } = useFirestore('images');

  const image = images.find(img => img.imageUrl === id);

  if (!image) {
    return <p>Photo not found</p>;
  }

  return (
    <div>
      <img src={image.imageUrl} />
      <p>Uploaded by: {image.userEmail}</p>
      <p>Created on: {image.createdAt.toLocaleDateString()}</p>
      <Link to="/">Go back to gallery</Link>
    </div>
  );
};

export default PhotoDetailPage;
