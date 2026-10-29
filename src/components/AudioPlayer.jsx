import { useRef, useState } from "react";
import "./AudioPlayer.css";
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward
} from "react-icons/fa";
function AudioPlayer({ audioLink, imageLink, author, onFinish }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play().catch(console.error);
    } else {
      audio.pause();
    }
  };
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };
  const goBack = () => {
    // Go back 10 seconds
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
    }
  };

  const goForward = () => {
    // Go forward 10 seconds
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + 10);
    }
  };
  return (
    <div className="audio__player">
    <div className="audio__book">
      <img src={imageLink} alt="Book cover" />
      <p>{author}</p>
    </div>
    <audio
      ref={audioRef}
      src={audioLink}
      onPlay={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
      onEnded={() => {
      setIsPlaying(false);
      onFinish?.();
      }}
      onLoadedMetadata={handleLoadedMetadata}
      onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime ?? 0)}
    />

      <button type="button" onClick={togglePlay} disabled={!audioLink}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button type="button" onClick={goBack} disabled={!audioLink}>
        <FaStepBackward />
      </button>
      <button type="button" onClick={goForward} disabled={!audioLink}>
        <FaStepForward />
      </button>
      <p>Duration: {duration ? formatDuration(duration) : "Loading..."}</p>
      <p>Current Time: {formatDuration(currentTime)}</p>
      <input
  type="range"
  min="0"
  max={duration || 0}
  value={currentTime}
  onChange={(e) => {
    const newTime = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  }}
  disabled={!Number.isFinite(duration) || duration <= 0}
/>
    </div>
    );

}

export default AudioPlayer;