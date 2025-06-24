import React from "react";
import { useState, useEffect } from "react";

const SlowConnectionPopup = () => {
  const [isSlow, setIsSlow] = useState(false);

  useEffect(() => {
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;

    if (connection) {
      const checkSpeed = () => {
        if (
          connection.effectiveType === "2g" ||
          connection.effectiveType === "slow-2g"
        ) {
          setIsSlow(true);
        }
      };

      checkSpeed();
      connection.addEventListener("change", checkSpeed);

      return () => {
        connection.removeEventListener("change", checkSpeed);
      };
    }
  }, []);

  if (!isSlow) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-black px-8 py-4 rounded-xl shadow-2xl z-50 text-2xl font-extrabold border-2 border-yellow-500 animate-bounce">
      ⚠️ Slow Internet Connection Detected
    </div>
  );
};

export default SlowConnectionPopup;
