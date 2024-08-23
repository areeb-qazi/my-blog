import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogList = ({ posts, likePost }) => {
  return (
    <div className="blog-list">
      <h2>Blog Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="card mb-4 shadow-sm">
          <img src={post.image} className="card-img-top" alt={post.title} />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.excerpt}</p>
            <p className="card-text">
              <small className="text-muted">By {post.admin} on {post.date}</small>
            </p>
            <p className="card-text">
              <button onClick={() => likePost(post.id)} className="btn btn-light">
                Like ({post.likes})
              </button>
            </p>
            <Link to={`/post/${post.id}`} className="btn btn-primary">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

BlogList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      admin: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
  likePost: PropTypes.func.isRequired,
};

export default BlogList;
