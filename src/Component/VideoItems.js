import React from "react";
import video1 from "../video/video1.mp4"
import video2 from "../video/video2.mp4"

const VideoItems = () => {
  return (
    <>
      <div className="container d-flex flex-wrap text-light">
        <div className="video mx-2 my-2" style={{ width: "25rem" }}>
          <video src={video1} style={{ width: "25rem" }}></video>
          <div className="video-body">
            <h5 className="video-title"><b>video title</b></h5>
            <p className="text-secondary"><b>Owner</b></p>
            <span className="text-secondary">Views</span> <span className="text-secondary">Timestamp</span>
          </div>
        </div>
        <div className="video mx-2 my-2" style={{ width: "25rem" }}>
          <video src={video2} style={{ width: "25rem" }}></video>
          <div className="video-body">
            <h5 className="video-title"><b>video title</b></h5>
            <p className="text-secondary"><b>Owner</b></p>
            <span className="text-secondary">Views</span> <span className="text-secondary">Timestamp</span>
          </div>
        </div>
        <div className="video mx-2 my-2" style={{ width: "25rem" }}>
          <video src={video1} style={{ width: "25rem" }}></video>
          <div className="video-body">
            <h5 className="video-title"><b>video title</b></h5>
            <p className="text-secondary"><b>Owner</b></p>
            <span className="text-secondary">Views</span> <span className="text-secondary">Timestamp</span>
          </div>
        </div>
        <div className="video mx-2 my-2" style={{ width: "25rem" }}>
          <video src={video1} style={{ width: "25rem" }}></video>
          <div className="video-body">
            <h5 className="video-title"><b>video title</b></h5>
            <p className="text-secondary"><b>Owner</b></p>
            <span className="text-secondary">Views</span> <span className="text-secondary">Timestamp</span>
          </div>
        </div>
        <div className="video mx-2 my-2" style={{ width: "25rem" }}>
          <video src={video1} style={{ width: "25rem" }}></video>
          <div className="video-body">
            <h5 className="video-title"><b>video title</b></h5>
            <p className="text-secondary"><b>Owner</b></p>
            <span className="text-secondary">Views</span> <span className="text-secondary">Timestamp</span>
          </div>
        </div>
        <div className="video mx-2 my-2" style={{ width: "25rem" }}>
          <video src={video1} style={{ width: "25rem" }}></video>
          <div className="video-body">
            <h5 className="video-title"><b>video title</b></h5>
            <p className="text-secondary"><b>Owner</b></p>
            <span className="text-secondary">Views</span> <span className="text-secondary">Timestamp</span>
          </div>
        </div>
        <div className="video mx-2 my-2" style={{ width: "25rem" }}>
          <video src={video1} style={{ width: "25rem" }}></video>
          <div className="video-body">
            <h5 className="video-title"><b>video title</b></h5>
            <p className="text-secondary"><b>Owner</b></p>
            <span className="text-secondary">Views</span> <span className="text-secondary">Timestamp</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoItems;
