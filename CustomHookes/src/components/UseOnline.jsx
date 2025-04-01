import useIsOnline from "../hookes/useIsOnline";

function UseOnline() {
  const isOnline = useIsOnline();
  
  return (
    <div>
      <h2 className="hook-title">useOnline Hook</h2>
      <div className="result-container">
        <div className="online-status-container">
          <div className={`status ${isOnline ? "status-online" : "status-offline"}`}>
            {isOnline ? "Online" : "Offline"}
          </div>
          <p className="connection-status">
            Your current connection status: <strong>{isOnline ? "Connected to the internet" : "No internet connection"}</strong>
          </p>
          
          <div className="status-indicator">
            <div className={`indicator-dot ${isOnline ? "online" : "offline"}`}></div>
          </div>
        </div>
        
        <div className="hook-description">          
          <p className="note">Try turning off your network connection to see the status change.</p>
        </div>
      </div>
    </div>
  );
}

export default UseOnline;