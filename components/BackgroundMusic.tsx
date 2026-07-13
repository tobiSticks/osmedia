"use client";

import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";

const VOLUME = 0.35;
const STORAGE_KEY = "osm-bg-music";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const videosPlaying = useRef(0);
  const [enabled, setEnabled] = useState(true);
  const [playing, setPlaying] = useState(false);

  // create the audio element once
  useEffect(() => {
    const audio = new Audio("/audio/bg-music.mp3");
    audio.loop = true;
    audio.volume = VOLUME;
    audio.preload = "auto";
    audioRef.current = audio;

    const wantsMusic = localStorage.getItem(STORAGE_KEY) !== "off";
    setEnabled(wantsMusic);

    const tryPlay = () => {
      if (localStorage.getItem(STORAGE_KEY) === "off") return;
      if (videosPlaying.current > 0) return;
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {
          /* autoplay blocked — wait for first interaction */
        });
    };

    // attempt autoplay immediately, otherwise on first interaction
    tryPlay();
    const onFirstInteraction = () => {
      tryPlay();
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
    };
    window.addEventListener("pointerdown", onFirstInteraction);
    window.addEventListener("keydown", onFirstInteraction);

    // duck the music whenever any <video> on the page plays
    const onVideoPlay = (e: Event) => {
      if (!(e.target instanceof HTMLVideoElement)) return;
      videosPlaying.current += 1;
      audio.pause();
      setPlaying(false);
    };
    const onVideoStop = (e: Event) => {
      if (!(e.target instanceof HTMLVideoElement)) return;
      videosPlaying.current = Math.max(0, videosPlaying.current - 1);
      if (videosPlaying.current === 0 && localStorage.getItem(STORAGE_KEY) !== "off") {
        audio
          .play()
          .then(() => setPlaying(true))
          .catch(() => {});
      }
    };
    document.addEventListener("play", onVideoPlay, true);
    document.addEventListener("pause", onVideoStop, true);
    document.addEventListener("ended", onVideoStop, true);

    return () => {
      audio.pause();
      audio.src = "";
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
      document.removeEventListener("play", onVideoPlay, true);
      document.removeEventListener("pause", onVideoStop, true);
      document.removeEventListener("ended", onVideoStop, true);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (enabled) {
      audio.pause();
      setEnabled(false);
      setPlaying(false);
      localStorage.setItem(STORAGE_KEY, "off");
    } else {
      setEnabled(true);
      localStorage.setItem(STORAGE_KEY, "on");
      if (videosPlaying.current === 0) {
        audio
          .play()
          .then(() => setPlaying(true))
          .catch(() => {});
      }
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={enabled ? "Turn background music off" : "Turn background music on"}
      title={enabled ? "Music on — click to turn off" : "Music off — click to turn on"}
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ${
        enabled
          ? "bg-ink/80 text-gold ring-1 ring-gold/50 hover:bg-ink"
          : "bg-ink/50 text-white/50 ring-1 ring-white/20 hover:text-white"
      }`}
    >
      {enabled ? (
        <span className={playing ? "animate-[spin_5s_linear_infinite]" : ""}>
          <Music size={18} />
        </span>
      ) : (
        <VolumeX size={18} />
      )}
    </button>
  );
}
