import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogPost = ({ posts, likePost }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) return <p>Post not found</p>;

  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <img src={post.image} alt={post.title} className="img-fluid" />
      <p>
        <small className="text-muted">By {post.admin} on {post.date}</small>
      </p>
      <p>{post.content}</p>
      <button onClick={() => likePost(post.id)} className="btn btn-light">
        Like ({post.likes})
      </button>
    </div>
  );
};

BlogPost.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      admin: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
  likePost: PropTypes.func.isRequired,
};

export default BlogPost;
