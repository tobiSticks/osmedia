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

    // attempt autoplay immediately, otherwise on the first user gesture
    // (browsers refuse audible playback until the visitor interacts once)
    tryPlay();
    const unlockEvents = ["pointerdown", "touchend", "keydown", "wheel"] as const;
    const onFirstInteraction = () => {
      if (localStorage.getItem(STORAGE_KEY) === "off" || videosPlaying.current > 0) {
        removeUnlockListeners();
        return;
      }
      audio
        .play()
        .then(() => {
          setPlaying(true);
          removeUnlockListeners();
        })
        .catch(() => {
          /* still blocked — keep listening for a stronger gesture */
        });
    };
    const removeUnlockListeners = () =>
      unlockEvents.forEach((ev) => window.removeEventListener(ev, onFirstInteraction));
    unlockEvents.forEach((ev) => window.addEventListener(ev, onFirstInteraction));

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
      removeUnlockListeners();
      document.removeEventListener("play", onVideoPlay, true);
      document.removeEventListener("pause", onVideoStop, true);
      document.removeEventListener("ended", onVideoStop, true);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    // if music isn't audibly playing (e.g. autoplay was blocked), the first
    // click on the button should START it — never silently disable it
    if (!playing) {
      setEnabled(true);
      localStorage.setItem(STORAGE_KEY, "on");
      if (videosPlaying.current === 0) {
        audio
          .play()
          .then(() => setPlaying(true))
          .catch(() => {});
      }
    } else {
      audio.pause();
      setEnabled(false);
      setPlaying(false);
      localStorage.setItem(STORAGE_KEY, "off");
    }
  };

  const awaitingUnlock = enabled && !playing;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {awaitingUnlock && (
        <span className="rounded-full bg-ink/80 px-3 py-1.5 text-xs uppercase tracking-wider text-gold shadow-lg backdrop-blur-sm">
          Tap for sound
        </span>
      )}
      <button
        onClick={toggle}
        aria-label={enabled ? "Turn background music off" : "Turn background music on"}
        title={enabled ? "Music on — click to turn off" : "Music off — click to turn on"}
        className={`relative flex h-12 w-12 items-center justify-center rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ${
          enabled
            ? "bg-ink/80 text-gold ring-1 ring-gold/50 hover:bg-ink"
            : "bg-ink/50 text-white/50 ring-1 ring-white/20 hover:text-white"
        }`}
      >
        {awaitingUnlock && (
          <span className="absolute inset-0 animate-ping rounded-full bg-gold/30" />
        )}
        {enabled ? (
          <span className={playing ? "animate-[spin_5s_linear_infinite]" : ""}>
            <Music size={18} />
          </span>
        ) : (
          <VolumeX size={18} />
        )}
      </button>
    </div>
  );
}
