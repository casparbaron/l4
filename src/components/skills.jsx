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
            title={selectedLanguage === "DE" ? imageItem.titleDe : imageItem.titleEng}
            content={selectedLanguage === "DE" ? imageItem.contentDe : imageItem.contentEng}
          />
        ))}
      </div>
    </div>
  );
}