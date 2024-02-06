"use client";

import { Button } from "@/components/ui/button";
import { Heart, PlayCircle } from "lucide-react";
import React, { useState } from "react";
import PlayVideoModal from "./PlayVideoModal";

const MovieCard = ({ movie }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="-mt-14" onClick={() => setOpen(true)}>
        <PlayCircle className="w-16 h-16" />
      </button>

      <div className="absolute right-3 top-3 z-10">
        {movie?.WatchLists?.length > 0 ? (
          <form>
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4 text-red-500" />
            </Button>
          </form>
        ) : (
          <form>
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4" />
            </Button>
          </form>
        )}
      </div>

      <div className="p-5 absolute bottom-0 left-0">
        <h1 className="font-bold text-lg line-clamp-1">{movie.title}</h1>
        <div className="flex items-center gap-x-2">
          <p className="font-normal text-sm">{movie.releaseDate}</p>
          <p className="font-normal px-1 py-0.5 border border-gray-200 text-sm rounded">
            {movie.age}+
          </p>
          <p className="font-normal text-sm">{movie.duration}h</p>
        </div>
        <p className="line-clamp-1 text-sm text-gray-200 font-light">
          {movie.overview}
        </p>
      </div>

      <PlayVideoModal
        id={movie.id}
        title={movie.title}
        overview={movie.overview}
        youtubeString={movie.youtubeString}
        releaseDate={movie.releaseDate} 
        age={movie.age} 
        duration = {movie.duration}
        state={open}
        changeState={setOpen}
      />
    </>
  );
};

export default MovieCard;
