"use client";
import { useUserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Callback() {
  const router = useRouter();
  const { setData } = useUserContext();
  useEffect(() => {
    const getUrl = window.location.hash;
    const splitUrl = getUrl.split("=");
    const getID = splitUrl[1];
    setData(getID);
    if (getID) {
      router.push("/home");
    }
  }, [router, setData]);

  return <div>Loading...</div>;
}
