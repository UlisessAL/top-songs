"use client";
import { useUserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Callback() {
  const router = useRouter();
  const { setData } = useUserContext();
  useEffect(() => {
    const currentUrl = window.location.href;
    const hashIndex = currentUrl.indexOf("#");
    if (hashIndex !== -1) {
      const hash = currentUrl.substring(hashIndex + 1);
      const params = hash.split("&").reduce((acc, param) => {
        const [key, value] = param.split("=");
        acc[key] = value;
        return acc;
      }, {});
      if (params.access_token) {
        const accessToken = params.access_token;
        setData(accessToken);
        router.push("/home");
      }
    }
  }, [router, setData]);

  return <div>Loading...</div>;
}
