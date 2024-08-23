import React from 'react';
import PropTypes from 'prop-types';
const WhatsTrending = ({ posts, likePost }) => {
    return (
        <div id="whats-trending" className="container whats-trending">
            <h2>What's Trending</h2>
            <div className="row">
                <div className="col-md-2 my-4">

                    <div className="signature_image a1">
                        <div className="sign_div">
                            <h4 className="ad-head m-0">Portrait</h4>
                            <p className="ad-para m-0">(300x1050)</p>
                        </div>
                    </div>

                </div>
                <div className="col-md-7 my-7">
                    {posts.map((post) => (
                        <div key={post.id} >
                            <div className="pt-3 shadow-sm">
                                <div className="story">
                                    <img src={post.image} alt={post.title} className="card-img-top" />
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
                    <div className="ads big">
                        <div className="signature_image">
                            <div className="sign_div">
                                <h4 className="ad-head m-0">Portrait</h4>
                                <p className="ad-para m-0">(300x1050)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-3 my-4">
                    <div className="ads-big">
                        <div className="signature_image">
                            <div className="sign_div">
                                <h4 className="ad-head m-0">Portrait</h4>
                                <p className="ad-para m-0">(300x1050)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

WhatsTrending.propTypes = {
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
    likePost: PropTypes.func.isRequired,
};

export default WhatsTrending;
