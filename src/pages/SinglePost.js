import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SinglePost = ({ getPostById, getNextPostId, getPrevPostId, getRelatedPosts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = getPostById(Number(id));
  const relatedPosts = getRelatedPosts(Number(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleNext = () => {
    const nextPostId = getNextPostId(Number(id));
    navigate(`/post/${nextPostId}`);
  };

  const handlePrev = () => {
    const prevPostId = getPrevPostId(Number(id));
    navigate(`/post/${prevPostId}`);
  };

  return (
    <div id='single-post' className='container'>
      <div className='row'>
      <div className='col-lg-8'>
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
      <div className='singlebtn'>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
      </div>
      <h2>Related Posts</h2>
      <div className="related-posts row">
        {relatedPosts.map((relatedPost) => (
          <div key={relatedPost.id} className="related-post col-6">
            <h3>{relatedPost.title}</h3>
            <img className='singlepostimg' src={relatedPost.image} alt={relatedPost.title} />
            <p>{relatedPost.excerpt}</p>
            <button onClick={() => navigate(`/post/${relatedPost.id}`)}>Read More</button>
          </div>
        ))}
      </div>
      </div>
      </div>
    </div>
  );
};

export default SinglePost;
