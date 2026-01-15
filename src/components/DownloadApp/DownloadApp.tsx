import React from "react";
import "./DownloadApp.css";
const DownloadButton: React.FC = () => {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    return <button className="download-btn">Download app</button>;
  }

  return null;
};

export default DownloadButton;
