import React, { useState } from 'react';
import productsData from './carouselData.json';
import './imageCarouselManual-styles.css';

const ImageCarouselManual = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % productsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + productsData.length) % productsData.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

   // ← AGREGAR ESTAS 3 LÍNEAS
  const BASE_URL = import.meta.env.BASE_URL || '';
  const getImageUrl = (imagePath) => {
    return imagePath.replace('src/assets/images/', `${BASE_URL}assets/`);
  };

  return (
    <section className="manual-carousel-section">
      <h2 className="carousel-title">Productos Destacados</h2>
      
      <div className="carousel-wrapper">
        <div 
          className="carousel-track" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {productsData.map((product) => (  // ✅ Sin index problemático
            <div key={product.id} className="card-slide">
              <div className="card-inner">
                <div className="card-image">
                  <img src={getImageUrl(product.image)} alt={product.title} loading="lazy" />
                </div>
                <div className="card-content">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <div className="price">{product.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn prev-btn" onClick={prevSlide}>❮</button>
        <button className="nav-btn next-btn" onClick={nextSlide}>❯</button>
      </div>

      <div className="dots-container">
        {productsData.map((_, index) => (
          <button
            key={`dot-${index}`}  // ✅ Key único
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageCarouselManual;
