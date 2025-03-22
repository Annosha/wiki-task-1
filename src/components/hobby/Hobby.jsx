import React from 'react';

function Hobby({ background, bannerText, imageUrl }) {
  return (
    <div
      className="banner"
      style={{
        backgroundColor: background,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'fill',
        color: '#fff',
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
        fontSize: '24px',
      }}
    >
      <h1>{bannerText}</h1>
    </div>
  );
}

export default Hobby;
