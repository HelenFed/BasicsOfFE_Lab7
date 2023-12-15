import React from 'react';
import './GoodsCard.css';

function GoodsCard({ image, name, price }) {
  return (
    <div className="goods-card">
      <img src={image} alt={name} className="goods-image" />
      <h3 className="goods-title">{name}</h3>
      <p className="goods-price">Ціна: ₴{price}</p>
    </div>
  );
}

export default GoodsCard;