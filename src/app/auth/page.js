"use client";
import { useUserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Callback() {
  const router = useRouter();
  const { setData } = useUserContext();
  const getUrl = window.location.hash;
  const splitUrl = getUrl.split("=");
  const getID = splitUrl[1];
  useEffect(() => {
    setData(getID);
    if (getID) {
      router.push("/home");
    }
  }, [getID, router, setData]);

  console.log(getID);

  return <div>Loading...</div>;
}
