"use client";

import { useUserContext } from "@/context/UserContext";
import { useEffect, useState } from "react";
import SongsMap from "./SongsMap/SongsMap";

export default function SpotifyTopSongs() {
  const [topSongs, setTopSongs] = useState([]);
  const [showSongs, setShowSongs] = useState(false);
  const { data } = useUserContext();

  const getTopSongs = async () => {
    try {
      const access_token = data;

      const url = `https://api.spotify.com/v1/me/top/tracks`;
      const params = new URLSearchParams({
        limit: 20,
        time_range: "short_term",
      });

      console.log(access_token);

      const newUrl = `${url}?${params.toString()}`;
      const response = await fetch(newUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      const songs = await response.json();
      setTopSongs(songs.items);
    } catch (error) {
      console.error(error);
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
