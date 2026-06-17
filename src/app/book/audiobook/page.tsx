'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, RotateCw, Volume2, VolumeX, SkipBack, SkipForward } from 'lucide-react';
import dynamic from 'next/dynamic';

const PdfViewer = dynamic(() => import('./PdfViewer'), { ssr: false });

const CHAPTERS = [
   { id: 1, title: 'Chapter 1', file: 'CHAPTER 1.mp3', pdfPage: 19 },
   { id: 2, title: 'Chapter 2', file: 'CHAPTER 2.mp3', pdfPage: 25 },
   { id: 3, title: 'Chapter 3', file: 'CHAPTER 3.mp3', pdfPage: 31 },
   { id: 4, title: 'Chapter 4', file: 'Chapter 4.mp3', pdfPage: 37 },
   { id: 5, title: 'Chapter 5', file: 'Chapter 5.mp3', pdfPage: 47 },
   { id: 6, title: 'Chapter 6', file: 'Chapter 6.mp3', pdfPage: 55 },
   { id: 7, title: 'Chapter 7', file: 'Chapter 7.mp3', pdfPage: 61 },
   { id: 8, title: 'Chapter 8', file: 'Chapter 8.mp3', pdfPage: 67 },
   { id: 9, title: 'Chapter 9', file: 'Chapter 9.wav', pdfPage: 75 },
   { id: 10, title: 'Chapter 10', file: 'Chapter 10.mp3', pdfPage: 79 },
   { id: 11, title: 'Chapter 11', file: 'Chapter 11.mp3', pdfPage: 83 },
   { id: 12, title: 'Chapter 12', file: 'Chapter 12.mp3', pdfPage: 87 },
   { id: 13, title: 'Chapter 13', file: 'Chapter 13.mp3', pdfPage: 91 },
   { id: 14, title: 'Chapter 14', file: 'Chapter 14.mp3', pdfPage: 97 },
   { id: 15, title: 'Chapter 15', file: 'Chapter 15.mp3', pdfPage: 101 },
   { id: 16, title: 'Chapter 16', file: 'Chapter 16.mp3', pdfPage: 105 },
   { id: 17, title: 'Chapter 17', file: 'Chapter 17.mp3', pdfPage: 109 },
   { id: 18, title: 'Chapter 18', file: 'Chapter 18.mp3', pdfPage: 113 },
   { id: 19, title: 'Chapter 19', file: 'Chapter 19.mp3', pdfPage: 117 },
   { id: 20, title: 'Chapter 20', file: 'Chapter 20.mp3', pdfPage: 121 },
   { id: 21, title: 'Chapter 21', file: 'Chapter 21.mp3', pdfPage: 125 },
   { id: 22, title: 'Conclusion', file: 'Conclusion.mp3', pdfPage: 130 },
];

export default function AudiobookPage() {
   const audioRef = useRef<HTMLAudioElement>(null);
   const [isPlaying, setIsPlaying] = useState(false);
   const [currentTime, setCurrentTime] = useState(0);
   const [duration, setDuration] = useState(0);
   const [volume, setVolume] = useState(1);
   const [isMuted, setIsMuted] = useState(false);
   const [playbackRate, setPlaybackRate] = useState(1);
   const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
   const isInitialMount = useRef(true);

   const [numPages, setNumPages] = useState<number | null>(null);
   const [containerWidth, setContainerWidth] = useState<number>(600);
   const containerRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (containerRef.current) {
         setContainerWidth(containerRef.current.clientWidth - 48);
      }
      const handleResize = () => {
         if (containerRef.current) {
            setContainerWidth(containerRef.current.clientWidth - 48);
         }
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   const currentTrack = CHAPTERS[currentTrackIndex];

   function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
      setNumPages(numPages);
   }

   const scrollContainerRef = useRef<HTMLDivElement>(null);

   const pagesToRender = [];
   if (numPages) {
      for (let i = 1; i <= numPages; i++) {
         pagesToRender.push(i);
      }
   }

   useEffect(() => {
      const audio = audioRef.current;
      if (!audio) return;

      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => {
         if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
            setDuration(audio.duration);
         }
      };
      const onEnded = () => {
         if (currentTrackIndex < CHAPTERS.length - 1) {
            setCurrentTrackIndex(prev => prev + 1);
         } else {
            setIsPlaying(false);
         }
      };
      const onPlay = () => setIsPlaying(true);
      const onPause = () => setIsPlaying(false);

      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      audio.addEventListener('durationchange', updateDuration);
      audio.addEventListener('canplay', updateDuration);
      audio.addEventListener('ended', onEnded);
      audio.addEventListener('play', onPlay);
      audio.addEventListener('pause', onPause);

      updateDuration();

      return () => {
         audio.removeEventListener('timeupdate', updateTime);
         audio.removeEventListener('loadedmetadata', updateDuration);
         audio.removeEventListener('durationchange', updateDuration);
         audio.removeEventListener('canplay', updateDuration);
         audio.removeEventListener('ended', onEnded);
         audio.removeEventListener('play', onPlay);
         audio.removeEventListener('pause', onPause);
      };
   }, [currentTrackIndex]);

   // Play when track changes
   useEffect(() => {
      if (isInitialMount.current) {
         isInitialMount.current = false;
         return;
      }
      if (audioRef.current) {
         audioRef.current.play().catch(e => console.error(e));
         setIsPlaying(true);
      }
   }, [currentTrackIndex]);

   useEffect(() => {
      if (audioRef.current) {
         audioRef.current.volume = isMuted ? 0 : volume;
      }
   }, [volume, isMuted]);

   useEffect(() => {
      if (audioRef.current) {
         audioRef.current.playbackRate = playbackRate;
      }
   }, [playbackRate]);

   const togglePlay = () => {
      if (audioRef.current) {
         if (audioRef.current.paused) {
            audioRef.current.play().catch(console.error);
         } else {
            audioRef.current.pause();
         }
      }
   };

   const skipTime = (amount: number) => {
      if (audioRef.current) {
         audioRef.current.currentTime += amount;
      }
   };

   const formatTime = (time: number) => {
      if (isNaN(time)) return "0:00";
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
   };

   const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newTime = Number(e.target.value);
      if (audioRef.current) {
         audioRef.current.currentTime = newTime;
         setCurrentTime(newTime);
      }
   };

   const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newVolume = Number(e.target.value);
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
   };

   const toggleMute = () => {
      setIsMuted(!isMuted);
   };

   const playPrevious = () => {
      if (currentTrackIndex > 0) {
         setCurrentTrackIndex(prev => prev - 1);
      }
   };

   const playNext = () => {
      if (currentTrackIndex < CHAPTERS.length - 1) {
         setCurrentTrackIndex(prev => prev + 1);
      }
   };

   return (
      <div className="flex flex-col w-full bg-[#e8e4db] min-h-screen pt-24 lg:pt-32 pb-24 px-4 md:px-8">
         <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left Column: Chapters Index */}
            <div className="order-2 lg:order-1 lg:col-span-3 h-[400px] lg:h-[calc(100vh-12rem)] relative lg:sticky lg:top-32 overflow-hidden">
               <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-muted-teal/10 h-full flex flex-col">
                  <div className="p-6 border-b border-muted-teal/10">
                     <h2 className="font-serif text-xl font-bold text-primary-900">Chapters Index</h2>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
                     {CHAPTERS.map((chapter, index) => (
                        <button
                           key={chapter.id}
                           onClick={() => setCurrentTrackIndex(index)}
                           className={`w-full text-left px-4 py-3 rounded-xl transition-all ${currentTrackIndex === index
                              ? 'bg-primary-900 text-cream font-bold shadow-md'
                              : 'hover:bg-primary-900/5 text-primary-900/80 font-medium'
                              }`}
                        >
                           <div className="flex justify-between items-center">
                              <span>{chapter.title}</span>
                              {currentTrackIndex === index && isPlaying && (
                                 <span className="flex h-3 items-center gap-[2px]">
                                    <span className="w-1 h-2 bg-cream animate-pulse rounded-full"></span>
                                    <span className="w-1 h-3 bg-cream animate-pulse delay-75 rounded-full"></span>
                                    <span className="w-1 h-2 bg-cream animate-pulse delay-150 rounded-full"></span>
                                 </span>
                              )}
                           </div>
                        </button>
                     ))}
                  </div>
               </div>
            </div>

            {/* Center Column: PDF Reader */}
            <div className="order-3 lg:order-2 lg:col-span-6 h-[70vh] lg:h-[calc(100vh-12rem)] relative lg:sticky lg:top-32" ref={containerRef}>
               <div
                  className="bg-[#323639] rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-muted-teal/10 h-full flex flex-col overflow-hidden"
                  onContextMenu={(e) => e.preventDefault()}
               >
                  <div className="flex-1 overflow-y-auto custom-scrollbar p-6 flex flex-col items-center relative" ref={scrollContainerRef}>
                     <PdfViewer
                        containerWidth={containerWidth}
                        pagesToRender={pagesToRender}
                        targetPage={currentTrack.pdfPage}
                        onDocumentLoadSuccess={onDocumentLoadSuccess}
                        scrollContainerRef={scrollContainerRef}
                     />
                  </div>
               </div>
            </div>

            {/* Right Column: Audiobook Player */}
            <div className="order-1 lg:order-3 lg:col-span-3 relative lg:sticky lg:top-32 h-fit">
               <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-muted-teal/10">
                  <div className="flex flex-col items-center">
                     {/* Book Cover */}
                     <div className="w-48 h-64 rounded-xl overflow-hidden shadow-2xl mb-6 relative border-[4px] border-white">
                        <img
                           src="/Dr Haiku Photos/gpm-photo-54.jpeg"
                           alt="World Peace Audiobook"
                           className="w-full h-full object-cover object-top"
                        />
                     </div>

                     {/* Title Info */}
                     <div className="text-center mb-6 w-full">
                        <h2 className="font-serif text-xl font-bold text-primary-900 mb-1 truncate px-2">{currentTrack.title}</h2>
                        <p className="text-xs text-primary-900/60 uppercase tracking-widest">&quot;Global Peace Is Possible&quot;</p>
                     </div>

                     {/* Audio Element (Hidden) */}
                     <audio
                        ref={audioRef}
                        src={`/books/${currentTrack.file}`}
                        preload="metadata"
                     />

                     {/* Progress Bar */}
                     <div className="w-full mb-6">
                        <input
                           type="range"
                           min="0"
                           max={duration || 0}
                           value={currentTime}
                           onChange={handleSeek}
                           className="w-full h-1.5 bg-primary-900/10 rounded-lg appearance-none cursor-pointer accent-primary-600 shadow-inner"
                        />
                        <div className="flex justify-between text-[10px] font-medium text-primary-900/60 mt-2">
                           <span>{formatTime(currentTime)}</span>
                           <span>{formatTime(duration)}</span>
                        </div>
                     </div>

                     {/* Main Controls */}
                     <div className="flex items-center justify-center gap-4 w-full mb-6">
                        <button
                           onClick={playPrevious}
                           disabled={currentTrackIndex === 0}
                           className="p-2 rounded-full text-primary-900/70 hover:text-primary-900 hover:bg-primary-900/5 transition-colors disabled:opacity-50"
                        >
                           <SkipBack className="w-5 h-5" />
                        </button>
                        <button
                           onClick={() => skipTime(-10)}
                           className="p-2 rounded-full text-primary-900/70 hover:text-primary-900 hover:bg-primary-900/5 transition-colors"
                           title="Rewind 10s"
                        >
                           <RotateCcw className="w-5 h-5" />
                        </button>

                        <button
                           onClick={togglePlay}
                           className="w-14 h-14 flex items-center justify-center bg-primary-900 text-cream rounded-full hover:bg-primary-800 transition-all shadow-[0_8px_20px_rgba(0,0,0,0.2)] hover:scale-105"
                        >
                           {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                        </button>

                        <button
                           onClick={() => skipTime(10)}
                           className="p-2 rounded-full text-primary-900/70 hover:text-primary-900 hover:bg-primary-900/5 transition-colors"
                           title="Forward 10s"
                        >
                           <RotateCw className="w-5 h-5" />
                        </button>
                        <button
                           onClick={playNext}
                           disabled={currentTrackIndex === CHAPTERS.length - 1}
                           className="p-2 rounded-full text-primary-900/70 hover:text-primary-900 hover:bg-primary-900/5 transition-colors disabled:opacity-50"
                        >
                           <SkipForward className="w-5 h-5" />
                        </button>
                     </div>

                     {/* Extra Controls: Volume & Speed */}
                     <div className="flex items-center justify-between w-full pt-4 border-t border-primary-900/10">
                        <div className="flex items-center gap-2">
                           <button onClick={toggleMute} className="text-primary-900/70 hover:text-primary-900">
                              {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                           </button>
                           <input
                              type="range"
                              min="0"
                              max="1"
                              step="0.05"
                              value={isMuted ? 0 : volume}
                              onChange={handleVolume}
                              className="w-24 h-1 bg-primary-900/10 rounded-lg appearance-none cursor-pointer accent-primary-600 shadow-inner"
                           />
                        </div>

                        <div className="relative group">
                           <select
                              value={playbackRate}
                              onChange={(e) => setPlaybackRate(Number(e.target.value))}
                              className="appearance-none bg-primary-900/5 hover:bg-primary-900/10 text-primary-900 font-medium text-xs py-1 pl-2 pr-6 rounded-full border-none outline-none cursor-pointer"
                           >
                              <option value="0.5">0.5x</option>
                              <option value="1">1x</option>
                              <option value="1.5">1.5x</option>
                              <option value="2">2x</option>
                           </select>
                           <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-primary-900/70 text-[10px]">▼</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>

         {/* Add some global styles for custom scrollbar within this component or use tailwind plugins */}
         <style jsx global>{`
            .custom-scrollbar::-webkit-scrollbar {
               width: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
               background: rgba(0,0,0,0.02);
               border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
               background: rgba(30, 58, 138, 0.2);
               border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
               background: rgba(30, 58, 138, 0.4);
            }
         `}</style>
      </div>
   );
}
