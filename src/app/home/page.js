"use client";
import SpotifyTopSongs from "@/components/SpotifyTopSongs/SpotifyTopSongs";
import { useUserContext } from "@/context/UserContext";
import { useEffect, useState } from "react";

export default function Page() {
  const { data, getUser, user, userExists } = useUserContext();

  useEffect(() => {
    getUser();
    console.log("Ejecutado");
  }, [data]);

  console.log(user);

  return (
    <>
      {userExists && (
        <>
          <main className="flex min-[1024px]:flex-row justify-center items-center mt-5 min-[320px]:flex-col mb-[50px] font-bold">
            <img
              className="w-[200px] rounded-full"
              src={user?.images[1]?.url}
              alt="logo-user"
            />
            <div className="flex flex-col justify-center p-3">
              <h1 className="min-[320px]:text-3xl  md:text-5xl ">
                {user.display_name}´s top songs
              </h1>
            </div>
          </main>
          <div className="flex flex-col items-center justify-center">
            <SpotifyTopSongs token={user.id} />
          </div>
        </>
      )}
    </>
  );
}
