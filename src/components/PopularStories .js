import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Ensure you're using react-router-dom for navigation

const PopularStories = ({ posts, smallPosts, miniPosts, likePost }) => {
  return (
    <div id="popular-stories" className="container popular-stories">
      <h2>Popular Stories</h2>
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-5 my-4">
            <div className="pt-3 shadow-sm">
              <div className="story">
                <img
                  src={post.image}
                  alt={post.title}
                  className="card-img-top sd"
                />
                <div className="card-body my-3">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">
                    <small className="text">
                      {post.admin} - {post.date}{' '}
                      <a onClick={() => likePost(post.id)} className="bn">
                        <i className="fas fa-thumbs-up"></i>({post.likes})
                      </a>
                    </small>
                  </p>
                   <a href={`/post/${post.id}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Read More
                    </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="col-md-4 my-4">
          {smallPosts.map((post) => (
            <div key={post.id} className="col-md-12 my-4">
              <div className="shadow-sm">
                <div className="story">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="card-img-top"
                  />
                  <div className="card-body my-3">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">
                      <small className="text">
                        {post.admin} - {post.date}{' '}
                        <a onClick={() => likePost(post.id)} className="bn">
                          <i className="fas fa-thumbs-up"></i>({post.likes})
                        </a>
                      </small>
                    </p>
                    <a href={`/post/${post.id}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-md-3 my-4">
          <div className="ads">
            <div className="signature_image">
              <div className="sign_div">
                <h4 className="ad-head m-0">Portrait</h4>
                <p className="ad-para m-0">(300x1050)</p>
              </div>
            </div>
          </div>
          {miniPosts.map((post) => (
            <div key={post.id} className="popular-img-mini my-5 my-sm-5 my-lg-4">
              <div className="shadow-sm">
                <div className="popular-img-mini" >
                  <img
                    src={post.image}
                  />
                  <a href={`/post/${post.id}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Read More
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

PopularStories.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      admin: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
  smallPosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      admin: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
  likePost: PropTypes.func.isRequired,

  miniPosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      admin: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
  likePost: PropTypes.func.isRequired,
};

export default PopularStories;
