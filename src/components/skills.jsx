import React, { useState } from 'react';
import image from './image';
import Card from './card';

export default function Skills({selectedLanguage, setSelectedLanguage}) {
  return (
    <div>
      <div className="card-container">
        {image.map((imageItem) => (
          <Card
            key={imageItem.key}
            title={selectedLanguage === "ENG" ? imageItem.titleDe : imageItem.titleEng}
            content={selectedLanguage === "ENG" ? imageItem.contentDe : imageItem.contentEng}
          />
        ))}
      </div>
    </div>
  );
}