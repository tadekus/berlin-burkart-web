
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Play } from 'lucide-react';

const VideoHero = () => {
  const videos = [
    {
      src: "https://videos.pexels.com/video-files/2022395/2022395-uhd_2560_1440_30fps.mp4",
      title: "Luxury Villa Exterior",
      poster: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop"
    },
    {
      src: "https://videos.pexels.com/video-files/3581368/3581368-uhd_2560_1440_25fps.mp4", 
      title: "Premium Penthouse Interior",
      poster: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2000&auto=format&fit=crop"
    },
    {
      src: "https://videos.pexels.com/video-files/3015494/3015494-uhd_2560_1440_30fps.mp4",
      title: "Luxury Apartment Pool & Terrace",
      poster: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000&auto=format&fit=crop"
    },
    {
      src: "https://videos.pexels.com/video-files/4022097/4022097-uhd_2560_1440_25fps.mp4",
      title: "High-End Modern House",
      poster: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2000&auto=format&fit=crop"
    },
    {
      src: "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_25fps.mp4",
      title: "Exclusive Mansion Estate",
      poster: "https://images.unsplash.com/photo-1597047084897-51e81819a499?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => 
          prevIndex === videos.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500);
    }, 8000); // Change video every 8 seconds

    return () => clearInterval(interval);
  }, [videos.length]);

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video failed to load:', e);
    setHasVideoError(true);
    // Try next video shortly on error
    setTimeout(() => {
      setCurrentVideoIndex((prevIndex) =>
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    }, 500);
  };

  const handleVideoLoaded = () => {
    setHasVideoError(false);
    console.log('Video loaded successfully:', videos[currentVideoIndex].title);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {/* Always-visible image fallback */}
        <img
          src={videos[currentVideoIndex].poster || "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80"}
          alt={videos[currentVideoIndex].title}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isTransitioning ? 'opacity-50' : 'opacity-100'
          }`}
          loading="eager"
        />
        {/* Video overlay */}
        <video
          key={currentVideoIndex}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={videos[currentVideoIndex].poster}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isTransitioning || hasVideoError ? 'opacity-0' : 'opacity-100'
          }`}
          onError={handleVideoError}
          onLoadedData={handleVideoLoaded}
        >
          <source
            src={videos[currentVideoIndex].src}
            type="video/mp4"
          />
        </video>

        {/* Video indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentVideoIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentVideoIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Switch to video ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Exklusive <span className="text-gradient-white">Immobilien</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Entdecken Sie außergewöhnliche Wohnträume in den prestigeträchtigsten Lagen Berlins
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
              Portfolio ansehen
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary bg-black bg-opacity-20 px-8 py-3 text-lg flex items-center gap-2 transition-all duration-300"
            >
              <Play size={20} fill="currentColor" />
              Video abspielen
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Property highlights overlay */}
      <div className="absolute bottom-20 left-6 right-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">50+</h3>
            <p className="text-sm">Exklusive Objekte</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">20+</h3>
            <p className="text-sm">Jahre Erfahrung</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">100%</h3>
            <p className="text-sm">Kundenzufriedenheit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;
