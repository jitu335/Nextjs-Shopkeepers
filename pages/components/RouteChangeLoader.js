import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const RouteChangeLoader = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="text-white text-4xl font-bold animate-bounce p-8 rounded-2xl bg-gray-900 shadow-2xl">
        Loading, Please Wait... 🔄
      </div>
    </div>
  );
};

export default RouteChangeLoader;
