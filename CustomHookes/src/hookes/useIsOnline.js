import { useEffect, useState } from "react";

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function updateIsOnlineStatus() {
      setIsOnline(navigator.onLine);
    }
    window.addEventListener("online", updateIsOnlineStatus);
    window.addEventListener("offline", updateIsOnlineStatus);

    return () => {
      window.removeEventListener("offline", updateIsOnlineStatus);
      window.removeEventListener("online", updateIsOnlineStatus);
    };
  }, []);

  return isOnline;
}

export default useIsOnline;
