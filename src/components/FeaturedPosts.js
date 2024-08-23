import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



const FeaturedPosts = ({ posts, likePost }) => {
    return (
        <div id="fpost" className="container featured-posts">
            <h2>Featured Posts</h2>
            <div className="row">
                <div className='col-md-9'>
                {posts.map((post) => (
                    <div key={post.id} className="col-md-12">
                        <div className="pt-3 shadow-sm">
                            <div className="row no-gutters">
                                <div className="col-md-4 posti">
                                    <img src={post.image} className="card-img" alt={post.title} />
                                    <p className="card-text">
                                        <small className="text">
                                            {post.admin}-{post.date}{' '}
                                            <a onClick={() => likePost(post.id)} className="bn">
                                                <i className="fas fa-thumbs-up"></i>({post.likes})
                                            </a>
                                        </small>
                                    </p>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body my-3">
                                        <h5 className="card-title">{post.title}</h5>
                                        <p className="text">{post.excerpt}</p>
                                         <a href={`/post/${post.id}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Read More
                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div class="col-lg-3">
                    <div class="signature_image">
                        <div class="sign_div">
                            <h4 class="ad-head m-0">Portrait</h4>
                            <p class="ad-para m-0">(300x1050)</p>
                        </div>
                               </div>

                </div>
            </div>
        </div>
    );
};

FeaturedPosts.propTypes = {
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

export default FeaturedPosts;
