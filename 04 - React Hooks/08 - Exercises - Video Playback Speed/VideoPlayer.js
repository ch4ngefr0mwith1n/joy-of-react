import React from 'react';

function VideoPlayer({ src, caption }) {
  const playbackRateSelectId = React.useId();
  
  return (
    <div className="video-player">
      <figure>
        <video
          controls
          src={src}
        />
        <figcaption>
          {caption}
        </figcaption>
      </figure>
      
      <div className="actions">
        <label htmlFor={playbackRateSelectId}>
          Select playback speed:
        </label>
        <select
          id={playbackRateSelectId}
          defaultValue="1"
        >
          <option value="0.5">0.5</option>
          <option value="1">1</option>
          <option value="1.25">1.25</option>
          <option value="1.5">1.5</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
  );
}

export default VideoPlayer;