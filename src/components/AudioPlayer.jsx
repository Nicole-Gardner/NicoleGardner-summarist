import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

function AudioPlayer({ audioLink }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play().catch(console.error);
    } else {
      audio.pause();
    }
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src={audioLink}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      <button
        type="button"
        onClick={togglePlay}
        disabled={!audioLink}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
}

export default AudioPlayer;