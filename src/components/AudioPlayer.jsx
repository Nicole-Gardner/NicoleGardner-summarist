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
   <div className="audio__player--wrapper">
  {/* LEFT: Book information */}
  <div className="audio__book">
    <img src={imageLink} alt="Book cover" />
    <div className="book__info">
      <p className="book__title">{author}</p>
    </div>
  </div>
    <div className="audio__controls">
  <button onClick={goBack}>
    <FaStepBackward />
  </button>

  <button onClick={togglePlay} className="play__button">
    {isPlaying ? <FaPause /> : <FaPlay />}
  </button>

  <button onClick={goForward}>
    <FaStepForward />
  </button>
</div>

<div className="audio__progress">
  <span>{formatDuration(currentTime)}</span>

<input
  id="audio-progress"
  name="audioProgress"
  aria-label="Audio playback progress"
  className="audio__slider"
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
  style={{
    background: `linear-gradient(to right,
      #2bd97c ${duration > 0 ? (currentTime / duration) * 100 : 0}%,
      #bac8ce ${duration > 0 ? (currentTime / duration) * 100 : 0}%)`
  }}
/>

  <span>{formatDuration(duration)}</span>
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
  onTimeUpdate={() =>
    setCurrentTime(audioRef.current?.currentTime ?? 0)
  }
/>
  </div>
  );
}

export default AudioPlayer;