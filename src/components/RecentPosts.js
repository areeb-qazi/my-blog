import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RecentPosts = ({ posts, smallPosts, likePost }) => {
    return (
        <div id="fpost" className="container recent-posts">
            <h2>Recent Posts</h2>
            <div className="row">
                <div className='col-md-6'>
                    {posts.map((post) => (
                        <div key={post.id} className="my">
                            <div className="shadow-sm">
                                <div className="posti">
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
                                <div className="card-body my-3">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="text">{post.excerpt}</p>
                                    <Link to={`/post/${post.id}`} className="btn btn-primary">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-md-3">
                        {smallPosts.map((post) => (
                            <div key={post.id} className="">
                                <div className="shadow-sm">
                                    <div className="posti">
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
                                    <div className="card-body my-3">
                                        <h5 className="card-title">{post.title}</h5>
                                        <p className="text">{post.excerpt}</p>
                                         <a href={`/post/${post.id}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Read More
                    </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                <div className="col-lg-3 col-12">
                    <div className="signature_image">
                        <div className="sign_div">
                            <h4 className="ad-head m-0">Portrait</h4>
                            <p className="ad-para m-0">(300x1050)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

RecentPosts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            excerpt: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            admin: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        })
    ).isRequired,
    smallPosts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            excerpt: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            admin: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        })
    ).isRequired,
    likePost: PropTypes.func.isRequired,
};

export default RecentPosts;
