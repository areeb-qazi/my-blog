import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PopularVideos = ({ videos, bigVideos, likeVideo }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div id="popular-videos" className="container popular-videos">
      <h2>Some Popular Videos</h2>
      <div className="row">
        {/* Render main popular videos */}
        {videos.map((video) => (
          <div key={video.id} className="col-md-4 my-4">
            <div className="pt-3 shadow-sm">
              <div className="video">
                <img
                  src={video.image}
                  alt={video.title}
                  className="card-img-top"
                />
                <div className="play-button-overlay" onClick={() => openVideo(video)}>
                  <i className="fas fa-play-circle fa-3x"></i>
                </div>
              </div>
              <div className="card-body my-3">
                <h5 className="card-title">{video.title}</h5>
                {/* <p className="card-text">
                  <small className="text">
                    {video.admin} - {video.date}{' '}
                    <a onClick={() => likeVideo(video.id)} className="bn">
                      <i className="fas fa-thumbs-up"></i>({video.likes})
                    </a>
                  </small>
                </p> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Big Popular Videos Section */}
      <div className="row">
        {bigVideos.map((video) => (
          <div key={video.id} className="col-md-12">
            <div className="pt-3 shadow-sm">
              <div className="video">
                <img
                  src={video.image}
                  alt={video.title}
                  className="card-img-top"
                />
                <div className="play-button-overlay" onClick={() => openVideo(video)}>
                  <i className="fas fa-play-circle fa-3x"></i>
                </div>
              </div>
              <div className="card-body my-3">
                <h5 className="card-title">{video.title}</h5>
                <p className="card-text">
                  <small className="text">
                    {video.admin} - {video.date}{' '}
                    <a onClick={() => likeVideo(video.id)} className="bn">
                      <i className="fas fa-thumbs-up"></i>({video.likes})
                    </a>
                  </small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Popup */}
      {selectedVideo && (
        <div className="video-popup">
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src={selectedVideo.url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={selectedVideo.title}
            ></iframe>
            <button onClick={closeVideo}><i class="fas fa-times"></i></button>
          </div>
        </div>
      )}
    </div>
  );
};

PopularVideos.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      admin: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
  bigVideos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      admin: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
  likeVideo: PropTypes.func.isRequired,
};

export default PopularVideos;
