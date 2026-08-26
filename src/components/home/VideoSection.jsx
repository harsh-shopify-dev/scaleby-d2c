import { useState } from 'react';
import { YOUTUBE_VIDEO_URL } from '../../data/mock';
import { Play } from 'lucide-react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!YOUTUBE_VIDEO_URL) return null;

  // Helper to extract clean youtube video ID
  const getVideoId = (url) => {
    if (!url) return null;
    try {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
      return (match && match[2].length === 11) ? match[2] : null;
    } catch (e) {
      return null;
    }
  };

  const videoId = getVideoId(YOUTUBE_VIDEO_URL);
  
  if (!videoId) return null;

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  return (
    <section className="py-20 bg-white border-b border-slate-100 animate-fade-up" id="video">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <div 
          className="relative shadow-product-light bg-slate-100 p-2 border border-slate-200/60 rounded-3xl overflow-hidden aspect-video group cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          {!isPlaying ? (
            <div className="w-full h-full relative rounded-2xl overflow-hidden bg-slate-900">
              <img 
                src={thumbnailUrl} 
                alt="Video Thumbnail" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-600/90 group-hover:bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-900/30 transition-all duration-300 transform group-hover:scale-110">
                  <Play className="w-10 h-10 md:w-12 md:h-12 text-white ml-2" fill="currentColor" />
                </div>
              </div>
            </div>
          ) : (
            <iframe
              src={embedUrl}
              title="ScaleBy Explained"
              className="w-full h-full rounded-2xl border-none bg-black"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}
