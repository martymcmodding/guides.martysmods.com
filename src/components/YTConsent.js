import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';

export default function YTConsentRhT4MFRQ5jo() {
  const [consentGiven, setConsentGiven] = useState(false);

  return consentGiven ? (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=RhT4MFRQ5jo"
      playing={false}
      muted={false}
      volume={0.2}
      controls={true}
      loop={false}
      width="100%"
      height="100%"
      style={{
        display: "block",
        aspectRatio: "16/9",
        margin: "0 auto"
      }}
    />
  ) : (
    <div
      style={{
        textAlign: "center",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        maxWidth: "800px",
        margin: "2rem auto"
      }}
    >
      <p>
        This video is hosted on YouTube. By clicking "Play Video", you consent to YouTube’s use of cookies and trackers, which may collect data.
      </p>
      <button
        onClick={() => setConsentGiven(true)}
        style={{
          padding: "0.6rem 1.2rem",
          fontSize: "1rem",
          background: "linear-gradient(90deg, #0099fa, #f900cb)",
          border: "1px solid #ccc",
          cursor: "pointer"
        }}
      >
        Play Video
      </button>
    </div>
  );
}