import React, { useEffect, useRef } from "react";

function AudioBackground(props) {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play();
  }, []);

  return <audio ref={audioRef} src={"/music/background.mp3"} loop />;
}

export default AudioBackground;
