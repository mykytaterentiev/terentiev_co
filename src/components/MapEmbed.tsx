import React from 'react';

const MapEmbed: React.FC = () => {

  const osmEmbedSrc = "https://www.openstreetmap.org/export/embed.html?bbox=35.18419%2C47.78133%2C35.18894%2C47.78333&layer=mapnik&marker=47.78233%2C35.18656";

  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg shadow-md border border-gray-300">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={osmEmbedSrc}
        title="Розташування офісу ТОВ TERENTIEV Co на карті OpenStreetMap" 
      ></iframe>
    </div>
  );
};

export default MapEmbed;