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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="text-white text-2xl sm:text-4xl font-bold animate-bounce px-6 py-4 rounded-2xl bg-gradient-to-br from-purple-700 via-indigo-500 to-teal-400 shadow-2xl text-center">
        Loading, Please Wait... 🔄
      </div>
    </div>
  );
};

export default RouteChangeLoader;
