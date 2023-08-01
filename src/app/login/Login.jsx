"use client";
const Login = ({ authURL }) => {
  const handleLogin = () => {
    window.location = authURL;
  };
  return (
    <button
      onClick={handleLogin}
      className="p-[10px] bg-white rounded text-[#1DB954] font-bold"
    >
      Iniciar sesión
    </button>
  );
};
export default Login;
