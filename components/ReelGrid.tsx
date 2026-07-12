"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Music2,
  Pause,
  Play,
  Send,
  Volume2,
  VolumeX,
} from "lucide-react";
import { siteConfig, type Reel } from "@/lib/data";

function formatCount(n: number) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 10_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toLocaleString();
}

function ReelCard({ reel }: { reel: Reel }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [liked, setLiked] = useState(false);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [burstKey, setBurstKey] = useState(0);
  const [flash, setFlash] = useState<"play" | "pause" | null>(null);

  // Autoplay when the reel is mostly on screen, pause when it leaves
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play().catch(() => {});
      setFlash("play");
    } else {
      el.pause();
      setFlash("pause");
    }
    setTimeout(() => setFlash(null), 500);
  };

  const doLike = () => {
    setLiked(true);
    setBurstKey((k) => k + 1);
  };

  // Single tap = play/pause, double tap = like (Instagram-style)
  const handleTap = () => {
    if (clickTimer.current) {
      clearTimeout(clickTimer.current);
      clickTimer.current = null;
      doLike();
      return;
    }
    clickTimer.current = setTimeout(() => {
      clickTimer.current = null;
      togglePlay();
    }, 260);
  };

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "/reels";
    try {
      if (navigator.share) {
        await navigator.share({ title: reel.title, url });
      } else {
        await navigator.clipboard.writeText(url);
      }
    } catch {
      /* user dismissed the share sheet */
    }
  };

  const likeCount = reel.likes + (liked ? 1 : 0);

  return (
    <article className="w-full max-w-[380px]">
      <div className="relative aspect-[9/16] overflow-hidden rounded-3xl bg-ink shadow-2xl shadow-ink/40 ring-1 ring-white/10">
        <video
          ref={videoRef}
          src={reel.video}
          poster={reel.poster}
          muted={muted}
          loop
          playsInline
          preload="metadata"
          onClick={handleTap}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onTimeUpdate={(e) => {
            const el = e.currentTarget;
            if (el.duration) setProgress((el.currentTime / el.duration) * 100);
          }}
          className="h-full w-full cursor-pointer object-cover"
        />

        {/* double-tap heart burst */}
        <AnimatePresence>
          {burstKey > 0 && (
            <motion.div
              key={burstKey}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.4, 1.25, 1.1, 1.4] }}
              transition={{ duration: 0.9, times: [0, 0.2, 0.7, 1] }}
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
            >
              <Heart size={96} className="text-white drop-shadow-lg" fill="currentColor" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* play / pause flash */}
        <AnimatePresence>
          {flash && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 0.9, scale: 1 }}
              exit={{ opacity: 0, scale: 1.3 }}
              transition={{ duration: 0.25 }}
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ink/60 text-white backdrop-blur-sm">
                {flash === "play" ? <Play size={26} fill="currentColor" /> : <Pause size={26} fill="currentColor" />}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* bottom gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />

        {/* right action rail */}
        <div className="absolute bottom-20 right-3 flex flex-col items-center gap-5 text-white">
          <button
            aria-label="Like"
            onClick={doLike}
            className="flex flex-col items-center gap-1 transition-transform active:scale-90"
          >
            <motion.span
              key={likeCount}
              initial={{ scale: 1.4 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Heart
                size={28}
                className={liked ? "text-red-500" : "text-white drop-shadow"}
                fill={liked ? "currentColor" : "none"}
              />
            </motion.span>
            <span className="text-xs font-medium drop-shadow">{formatCount(likeCount)}</span>
          </button>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Comments"
            className="flex flex-col items-center gap-1 transition-transform active:scale-90"
          >
            <MessageCircle size={28} className="drop-shadow" />
            <span className="text-xs font-medium drop-shadow">{formatCount(reel.comments)}</span>
          </a>
          <button
            aria-label="Share"
            onClick={handleShare}
            className="flex flex-col items-center gap-1 transition-transform active:scale-90"
          >
            <Send size={26} className="drop-shadow" />
            <span className="text-xs font-medium drop-shadow">{formatCount(reel.shares)}</span>
          </button>
          <button
            aria-label={muted ? "Unmute" : "Mute"}
            onClick={() => setMuted((m) => !m)}
            className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-colors hover:bg-white/25"
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>

        {/* caption block */}
        <div className="absolute bottom-4 left-4 right-16 text-white">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold font-display text-xs text-ink">
              OS
            </span>
            <span className="text-sm font-semibold drop-shadow">@osmediacreation</span>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-white/50 px-2 py-0.5 text-[11px] uppercase tracking-wider transition-colors hover:border-gold hover:text-gold"
            >
              Follow
            </a>
          </div>
          <p className="mt-2 line-clamp-2 text-sm text-white/90 drop-shadow">{reel.title}</p>
          <div className="mt-1.5 flex items-center gap-1.5 text-xs text-white/70">
            <Music2 size={12} />
            <span>Original audio — {siteConfig.name}</span>
            <span aria-hidden>·</span>
            <span>{reel.duration}</span>
          </div>
        </div>

        {/* progress bar */}
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white/20">
          <div
            className="h-full bg-gold transition-[width] duration-200 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* paused hint when scrolled away / manually paused */}
        {!playing && !flash && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-ink/40 text-white backdrop-blur-sm">
              <Play size={24} fill="currentColor" />
            </span>
          </div>
        )}
      </div>
    </article>
  );
}

export default function ReelGrid({ reels }: { reels: Reel[] }) {
  return (
    <div className="flex flex-wrap items-start justify-center gap-10">
      {reels.map((reel) => (
        <ReelCard key={reel.video} reel={reel} />
      ))}
    </div>
  );
}
