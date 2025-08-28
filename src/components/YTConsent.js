import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';

export default function YTConsentRhT4MFRQ5jo() {
  const [consentGiven, setConsentGiven] = useState(false);

  const containerStyle = {
    textAlign: "center",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    maxWidth: "800px",
    margin: "2rem auto"
  };

  const buttonStyle = {
    padding: "0.6rem 1.2rem",
    fontSize: "1rem",
    background: "linear-gradient(90deg, #0099fa, #f900cb)",
    border: "1px solid #ccc",
    cursor: "pointer"
  };

  const playerStyle = {
    display: "block",
    aspectRatio: "16/9",
    margin: "0 auto"
  };

  const consentMessage = "This video is hosted on YouTube. By clicking \"Play Video\", you consent to YouTube's use of cookies and trackers, which may collect data.";

  if (consentGiven) {
    return (
      <ReactPlayer
        url="https://www.youtube.com/watch?v=RhT4MFRQ5jo"
        playing={false}
        muted={false}
        volume={0.2}
        controls={true}
        loop={false}
        width="100%"
        height="100%"
        style={playerStyle}
      />
    );
  }

  return (
    <div style={containerStyle}>
      <p>{consentMessage}</p>
      <button
        onClick={() => setConsentGiven(true)}
        style={buttonStyle}
      >
        Play Video
      </button>
    </div>
  );
}