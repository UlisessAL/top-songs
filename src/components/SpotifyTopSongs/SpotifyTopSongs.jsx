"use client";

import { useUserContext } from "@/context/UserContext";
import { useEffect, useState } from "react";
import SongsMap from "./SongsMap/SongsMap";

export default function SpotifyTopSongs() {
  const [topSongs, setTopSongs] = useState([]);
  const [infoSongs, setInfoSongs] = useState([]);
  const [showSongs, setShowSongs] = useState(false);
  const { data } = useUserContext();
  const dataId = data;

  const getTopSongs = async () => {
    try {
      const topSongsResponse = await fetch(
        `https://api.spotify.com/v1/me/top/tracks?time_range=short_term`,
        {
          headers: {
            Authorization: `Bearer ${dataId}`,
          },
        }
      );

      const topSongsData = await topSongsResponse.json();
      setInfoSongs(topSongsData);
      const songs = topSongsData.items;
      setTopSongs(songs);
    } catch {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopSongs();
  }, []);

  const top3Songs = topSongs.slice(0, 3);
  const otherSongs = topSongs.slice(3, 20);

  return (
    <div className="max-w-[1024px] flex flex-col justify-center gap-[10px] ">
      <SongsMap songs={top3Songs} />
      {!showSongs ? (
        <div className="flex justify-center">
          <button
            className="rounded bg-[#1DB954] w-[120px] p-[10px]"
            onClick={() => setShowSongs(true)}
          >
            Ver más
          </button>
        </div>
      ) : (
        <SongsMap songs={otherSongs} />
      )}
    </div>
  );
}
