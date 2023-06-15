import React, { useState } from 'react';
import './styles.css';
import image from './image';
import Card from './card';
import Scriptnavbar from './script-navbar';

export default function Skills() {
  const [selectedLanguage, setSelectedLanguage] = useState('DE');
  console.log(selectedLanguage);
  return (
    <div>
      
      <div className="card-container">
        {image.map((imageItem) => (
          <Card
            key={imageItem.key}
            title={selectedLanguage === "DE" ? imageItem.titleDe : imageItem.titleEng}
            content={selectedLanguage === "DE" ? imageItem.contentDe : imageItem.contentEng}
          />
        ))}
      </div>
    </div>
  );
}