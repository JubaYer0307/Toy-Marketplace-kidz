import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/toygallery')
      .then((res) => res.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="gallery">
      <h1 className='text-5xl font-bold text-center'>Photo Gallery</h1>
      <div style={styles.photoGrid}>
        {photos.map((photo) => (
          <div style={styles.photoItem} key={photo.id}>
            
            <img style={styles.photo} src={photo.url} alt={photo.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  photoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2px',
  },
  photoItem: {
    textAlign: 'center',
  },
  photo: {
    width: '100%',
    height: '300px',
  },
};

export default Gallery;
