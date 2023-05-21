import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    AOS.init({
      once: true,
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);

    fetch("https://toy-marketplace-server-eta.vercel.app/toygallery")
      .then((res) => res.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.log(error));

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener on component unmount
    };
  }, []);

  return (
    <div className="gallery mt-16 mb-5">
      <h1
        className="text-5xl font-bold text-center"
        style={{ fontFamily: "cursive" }}
      >
        Photo Gallery
      </h1>
      <div style={styles.photoGrid}>
        {photos.map((photo) => (
          <div
            style={styles.photoItem}
            key={photo.id}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img style={styles.photo} src={photo.url} alt={photo.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  photoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2px",
  },
  photoItem: {
    textAlign: "center",
  },
  photo: {
    width: "100%",
    height: "300px",
  },
};

export default Gallery;
