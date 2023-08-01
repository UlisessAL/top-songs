import Login from "./login/Login";

export default function page() {
  const client_id = process.env.CLIENT_ID;
  const redirect_uri = process.env.REDIRECT_URI;
  const scopes = [
    "user-top-read",
    "user-read-private",
    "user-library-read",
    "playlist-read-private",
    "user-read-email",
  ];

  const authURL = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&redirect_uri=${encodeURIComponent(
    redirect_uri
  )}&scope=${encodeURIComponent(scopes)}`;

  return (
    <main className="flex flex-col justify-center items-center h-[100vh]">
      <p className="font-bold min-[768px]:text-[55px] min-[320px]:text-[20px]">
        Tus canciones más
      </p>
      <p className="font-bold min-[768px]:text-[55px] min-[320px]:text-[20px]">
        escuchadas de
      </p>
      <img
        src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-green-logo-8.png"
        alt="logoSpotify"
        className="min-[320px]:w-[200px] min-[768px]:w-[300px]"
      />
      <Login authURL={authURL} />
    </main>
  );
}
