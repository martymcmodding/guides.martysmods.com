import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';

function getVideoId(url) {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  return match ? match[1] : null;
}

export function YTConsentLaunchpad() {
  const [playing, setPlaying] = useState(false);
  const url = "https://www.youtube.com/watch?v=RhT4MFRQ5jo";
  const videoId = getVideoId(url);

  const wrapperStyle = {
    maxWidth: "1200px",
    margin: "2rem auto"
  };

  const containerStyle = {
    position: "relative",
    aspectRatio: "16/9",
    cursor: "pointer",
    overflow: "hidden"
  };

  const thumbnailStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    filter: "blur(4px)",
    margin: 0,
    padding: 0
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    transition: "background-color 0.2s"
  };

  const playButtonStyle = {
    width: "136px",
    height: "96px",
    borderRadius: "28px",
    background: "#FF0000",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
  };

  const playIconStyle = {
    width: 0,
    height: 0,
    borderLeft: "50px solid white",
    borderTop: "30px solid transparent",
    borderBottom: "30px solid transparent",
    marginLeft: "10px"
  };

  const bannerStyle = {
    position: "absolute",
    bottom: "16px",
    left: "16px",
    background: "rgba(0, 0, 0, 0.7)",
    color: "white",
    padding: "12px 24px",
    borderRadius: "8px",
    fontSize: "24px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    zIndex: 10
  };

  const playerStyle = {
    display: "block",
    aspectRatio: "16/9",
    margin: "0 auto"
  };

  if (playing) {
    return (
      <div style={wrapperStyle}>
        <ReactPlayer
          url={url}
          playing={true}
          muted={false}
          volume={0.2}
          controls={true}
          loop={false}
          width="100%"
          height="100%"
          style={playerStyle}
        />
      </div>
    );
  }

  return (
    <div style={wrapperStyle}>
      <div
        style={containerStyle}
        onClick={() => setPlaying(true)}
        onMouseEnter={(e) => {
          e.currentTarget.querySelector('[data-overlay]').style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.querySelector('[data-overlay]').style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        }}
      >
        <img
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt="Video thumbnail"
          style={thumbnailStyle}
        />
        <div style={bannerStyle}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          <span>Play on YouTube</span>
        </div>
        <div style={overlayStyle} data-overlay>
          <button style={playButtonStyle} onClick={(e) => { e.stopPropagation(); setPlaying(true); }}>
            <div style={playIconStyle}></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export function YTConsentInjectReshade() {
  const [playing, setPlaying] = useState(false);
  const url = "https://www.youtube.com/watch?v=mVBLb-J_Hps";
  const videoId = getVideoId(url);

  const wrapperStyle = {
    maxWidth: "1200px",
    margin: "2rem auto"
  };

  const containerStyle = {
    position: "relative",
    aspectRatio: "16/9",
    cursor: "pointer",
    overflow: "hidden"
  };

  const thumbnailStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    filter: "blur(4px)",
    margin: 0,
    padding: 0
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    transition: "background-color 0.2s"
  };

  const playButtonStyle = {
    width: "136px",
    height: "96px",
    borderRadius: "28px",
    background: "#FF0000",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
  };

  const playIconStyle = {
    width: 0,
    height: 0,
    borderLeft: "50px solid white",
    borderTop: "30px solid transparent",
    borderBottom: "30px solid transparent",
    marginLeft: "10px"
  };

  const bannerStyle = {
    position: "absolute",
    bottom: "16px",
    left: "16px",
    background: "rgba(0, 0, 0, 0.7)",
    color: "white",
    padding: "12px 24px",
    borderRadius: "8px",
    fontSize: "24px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    zIndex: 10
  };

  const playerStyle = {
    display: "block",
    aspectRatio: "16/9",
    margin: "0 auto"
  };

  if (playing) {
    return (
      <div style={wrapperStyle}>
        <ReactPlayer
          url={url}
          playing={true}
          muted={false}
          volume={0.2}
          controls={true}
          loop={false}
          width="100%"
          height="100%"
          style={playerStyle}
        />
      </div>
    );
  }

  return (
    <div style={wrapperStyle}>
      <div
        style={containerStyle}
        onClick={() => setPlaying(true)}
        onMouseEnter={(e) => {
          e.currentTarget.querySelector('[data-overlay]').style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.querySelector('[data-overlay]').style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        }}
      >
        <img
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt="Video thumbnail"
          style={thumbnailStyle}
        />
        <div style={bannerStyle}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          <span>Play on YouTube</span>
        </div>
        <div style={overlayStyle} data-overlay>
          <button style={playButtonStyle} onClick={(e) => { e.stopPropagation(); setPlaying(true); }}>
            <div style={playIconStyle}></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export function YTConsentManualShaderInstall() {
  const [playing, setPlaying] = useState(false);
  const url = "https://www.youtube.com/watch?v=vIc020i-6aM&t=84s";
  const videoId = getVideoId(url);

  const wrapperStyle = {
    maxWidth: "1200px",
    margin: "2rem auto"
  };

  const containerStyle = {
    position: "relative",
    aspectRatio: "16/9",
    cursor: "pointer",
    overflow: "hidden"
  };

  const thumbnailStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    filter: "blur(4px)",
    margin: 0,
    padding: 0
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    transition: "background-color 0.2s"
  };

  const playButtonStyle = {
    width: "136px",
    height: "96px",
    borderRadius: "28px",
    background: "#FF0000",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
  };

  const playIconStyle = {
    width: 0,
    height: 0,
    borderLeft: "50px solid white",
    borderTop: "30px solid transparent",
    borderBottom: "30px solid transparent",
    marginLeft: "10px"
  };

  const bannerStyle = {
    position: "absolute",
    bottom: "16px",
    left: "16px",
    background: "rgba(0, 0, 0, 0.7)",
    color: "white",
    padding: "12px 24px",
    borderRadius: "8px",
    fontSize: "24px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    zIndex: 10
  };

  const playerStyle = {
    display: "block",
    aspectRatio: "16/9",
    margin: "0 auto"
  };

  if (playing) {
    return (
      <div style={wrapperStyle}>
        <ReactPlayer
          url={url}
          playing={true}
          muted={false}
          volume={0.2}
          controls={true}
          loop={false}
          width="100%"
          height="100%"
          style={playerStyle}
        />
      </div>
    );
  }

  return (
    <div style={wrapperStyle}>
      <div
        style={containerStyle}
        onClick={() => setPlaying(true)}
        onMouseEnter={(e) => {
          e.currentTarget.querySelector('[data-overlay]').style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.querySelector('[data-overlay]').style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        }}
      >
        <img
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt="Video thumbnail"
          style={thumbnailStyle}
        />
        <div style={bannerStyle}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          <span>Play on YouTube</span>
        </div>
        <div style={overlayStyle} data-overlay>
          <button style={playButtonStyle} onClick={(e) => { e.stopPropagation(); setPlaying(true); }}>
            <div style={playIconStyle}></div>
          </button>
        </div>
      </div>
    </div>
  );
}