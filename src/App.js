import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SinglePost from './pages/SinglePost';
import About from './pages/About';
import Contact from './pages/Contact';
import CarouselComponent from './components/CarouselComponent';
import FeaturedPosts from './components/FeaturedPosts';
import RecentPosts from './components/RecentPosts';
import PopularVideos from './components/PopularVideos';
import PopularStories from './components/PopularStories ';
import WhatsTrending from './components/WhatsTrending';
import f1 from './assets/images/f1.png';
import f2 from './assets/images/f2.png';
import f3 from './assets/images/f3.png';
import r1 from './assets/images/r1.png';
import r2 from './assets/images/r2.png';
import sr1 from './assets/images/sr1.png';
import sr2 from './assets/images/sr2.png';
import sr3 from './assets/images/sr3.png';
import vr1 from './assets/images/vr1.png';
import vr2 from './assets/images/vr2.jpg';
import vr3 from './assets/images/vr3.webp';
import vr4 from './assets/images/vr4.jpg';
import ps1 from './assets/images/ps1.png';
import ps2 from './assets/images/ps2.png';
import ps3 from './assets/images/ps3.png';
import mi1 from './assets/images/mi1.png';
import mi2 from './assets/images/mi2.png';
import mi3 from './assets/images/mi3.png';
import mi4 from './assets/images/mi4.png';
import wh1 from './assets/images/wh1.png';
import wh2 from './assets/images/wh2.png';
import wh3 from './assets/images/wh3.png';
import './styles/responsive.css';
import './styles/custom.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [featuredPosts, setFeaturedPosts] = useState([
    {
      id: 1,
      title: 'Disney s Upcoming Live-Action Remake of The Little Mermaid Casts New Ariel',
      excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.',
      image: f1,
      admin: 'Admin1',
      date: new Date().toLocaleDateString(),
      likes: 0,
    },
    {
      id: 2,
      title: 'NBA Star LeBron James Invests in Pro Soccer Team',
      excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.',
      image: f2,
      admin: 'Admin2',
      date: new Date().toLocaleDateString(),
      likes: 0,
    },
    {
      id: 3,
      title: 'Tesla Announces Plans for Self-Driving Electric Semi Trucks',
      excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.',
      image: f3,
      admin: 'Admin3',
      date: new Date().toLocaleDateString(),
      likes: 0,
    },
  ]);

  const [recentPosts, setRecentPosts] = useState([
    {
      id: 4,
      title: 'New Technology in Renewable Energy',
      excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.',
      image: r1,
      admin: 'Admin4',
      date: new Date().toLocaleDateString(),
      likes: 0,
    },
    {
      id: 5,
      title: 'SpaceX Launches New Satellite into Orbit',
      excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.',
      image: r2,
      admin: 'Admin5',
      date: new Date().toLocaleDateString(),
      likes: 0,
    },
  ]);

  const [smallRecentPosts, setSmallRecentPosts] = useState([
    {
      id: 7,
      title: 'Breakthrough in Quantum Computing',
      excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...',
      image: sr1,
      admin: 'Admin7',
      date: new Date().toLocaleDateString(),
      likes: 0,
    },
    {
      id: 8,
      title: 'New Vaccine Development Shows Promise',
      excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...',
      image: sr2,
      admin: 'Admin8',
      date: new Date().toLocaleDateString(),
      likes: 0,
    },
    {
      id: 9,
      title: 'AI Revolutionizes Healthcare',
      excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...',
      image: sr3,
      admin: 'Admin9',
      date: new Date().toLocaleDateString(),
      likes: 0,
    },
  ]);

  const [popularVideos, setPopularVideos] = useState([
    {
      id: 1,
      title: 'Untamed Adventure Wilderness 🦍 Discovery Amazing Animals Planet Movie With Relaxing Piano Music',
      url: 'https://www.youtube.com/embed/jlC-_xAzyrs?si=2fGnikD_8loONKV0',
      admin: 'Admin1',
      image: vr2,
      date: new Date().toLocaleDateString(),
      likes: 0,
    },
    {
      id: 2,
      title: 'Unexplained Universe Mysteries | Space Documentary',
      url: 'https://www.youtube.com/embed/hyNwBiCs7Ro?si=j3HdlPaaJTPBV8NO',
      admin: 'Admin2',
      image: vr3,
      date: new Date().toLocaleDateString(),
      likes: 0,
    },
    {
      id: 3,
      title: 'TOP 5 UNSOLVED MYSTERIES OF 2022 | The UnXplained',
      url: 'https://www.youtube.com/embed/PflRUUL4018?si=x5tjN8HcgNj-v7G_',
      admin: 'Admin3',
      image: vr4,
      date: new Date().toLocaleDateString(),
      likes: 0,
    },
  ]);

  const [bigPopularVideos, setBigPopularVideos] = useState([
    {
      id: 4,
      title: 'Why Diversity and Inclusion in the Workplace Matter',
      image: vr1,
      admin: 'Admin4',
      url: 'https://www.youtube.com/embed/hyNwBiCs7Ro?si=j3HdlPaaJTPBV8NO',
      date: new Date().toLocaleDateString(),
      likes: 0,
    },
    // Add more big popular videos as needed
  ]);

  const [popularStories, setPopularStories] = useState([
    // Sample popular stories data
    {
      id: 10,
      title: 'The Future of Work: What Jobs Will Look Like in 10 Years',
      image: ps1,
      admin: 'Admin10',
      date: new Date().toLocaleDateString(),
      likes: 0,
    },
  ]);

  const [smallPopularStories, setSmallPopularStories] = useState([
    {
      id: 11,
      title: 'How Social Media Influencers are Changing the Advertising Landscape',
      image: ps2,
      admin: 'Admin11',
      date: new Date().toLocaleDateString(),
      likes: 0,
    },
    {
      id: 12,
      title: 'The Benefits and Risks of Using Artificial Intelligence in Healthcare',
      image: ps3,
      admin: 'Admin12',
      date: new Date().toLocaleDateString(),
      likes: 0,
    },
  ]);

  const [miniPopularStories, setMiniPopularStories] = useState([
    {
      id: 13,
      title: 'Exploring the Science Behind the Benefits of Gratitude',
      image: mi1,
      admin: 'Admin13',
      date: new Date().toLocaleDateString(),
      likes: 0,
    },
    {
      id: 14,
      title: 'The Benefits of Travel for Mental Health and Well-Being',
      image: mi2,
      admin: 'Admin14',
      date: new Date().toLocaleDateString(),
      likes: 0,
    },
    {
      id: 15,
      title: 'The Rise of Plant-Based Meat Alternatives',
      image: mi3,
      admin: 'Admin15',
      date: new Date().toLocaleDateString(),
      likes: 0,
    },
    {
      id: 16,
      title: 'Why Online Learning is Here to Stay',
      image: mi4,
      admin: 'Admin16',
      date: new Date().toLocaleDateString(),
      likes: 0,
    },
  ]);

  const [trendingPosts, setTrendingPosts] = useState([
    {
      id: 17,
      title: 'The Impact of Climate Change on Global Economies',
      image: wh1,
      admin: 'Admin17',
      date: new Date().toLocaleDateString(),
      likes: 0,
    },
    {
      id: 18,
      title: 'The Future of Remote Work: Trends to Watch',
      image: wh2,
      admin: 'Admin18',
      date: new Date().toLocaleDateString(),
      likes: 0,
    },
    {
      id: 19,
      title: 'How Blockchain is Transforming Industries',
      image: wh3,
      admin: 'Admin19',
      date: new Date().toLocaleDateString(),
      likes: 0,
    },
    // Add more trending posts as needed
  ]);

 
  const addPost = ({ title, content, image, isFeatured }) => {
    const newPost = {
      id: isFeatured ? featuredPosts.length + 1 : recentPosts.length + 4,
      title,
      excerpt: content.substring(0, 50) + '...',
      content,
      image: isFeatured ? f1 : r1,
      admin: 'Admin',
      date: new Date().toLocaleDateString(),
      likes: 0,
    };

    if (isFeatured) {
      setFeaturedPosts([...featuredPosts, newPost]);
    } else {
      setRecentPosts([...recentPosts, newPost]);
    }
  };

  const likePost = (id) => {
    const updateLikes = (posts) =>
      posts.map((post) => (post.id === id ? { ...post, likes: post.likes + 1 } : post));

    setFeaturedPosts(updateLikes(featuredPosts));
    setRecentPosts(updateLikes(recentPosts));
    setPopularStories(updateLikes(popularStories));
    setSmallPopularStories(updateLikes(smallPopularStories));
    setMiniPopularStories(updateLikes(miniPopularStories));
    setTrendingPosts(updateLikes(trendingPosts));
  };

  const likeVideo = (id) => {
    const updateLikes = (videos) =>
      videos.map((video) => (video.id === id ? { ...video, likes: video.likes + 1 } : video));

    setPopularVideos(updateLikes(popularVideos));
    setBigPopularVideos(updateLikes(bigPopularVideos));
  };

  const getPostById = (id) => {
    return [
      ...featuredPosts,
      ...recentPosts,
      ...smallRecentPosts,
      ...popularStories,
      ...smallPopularStories,
      ...miniPopularStories,
      ...trendingPosts,
    ].find((post) => post.id === id);
  };

  const getNextPostId = (id) => {
    const allPosts = [
      ...featuredPosts,
      ...recentPosts,
      ...smallRecentPosts,
      ...popularStories,
      ...smallPopularStories,
      ...miniPopularStories,
      ...trendingPosts,
    ];
    const currentIndex = allPosts.findIndex((post) => post.id === id);
    const nextIndex = (currentIndex + 1) % allPosts.length;
    return allPosts[nextIndex].id;
  };

  const getPrevPostId = (id) => {
    const allPosts = [
      ...featuredPosts,
      ...recentPosts,
      ...smallRecentPosts,
      ...popularStories,
      ...smallPopularStories,
      ...miniPopularStories,
      ...trendingPosts,
    ];
    const currentIndex = allPosts.findIndex((post) => post.id === id);
    const prevIndex = (currentIndex - 1 + allPosts.length) % allPosts.length;
    return allPosts[prevIndex].id;
  };

  const getRelatedPosts = (id) => {
    const allPosts = [
      ...featuredPosts,
      ...recentPosts,
      ...smallRecentPosts,
      ...popularStories,
      ...smallPopularStories,
      ...miniPopularStories,
      ...trendingPosts,
    ];
    return allPosts.filter(post => post.id !== id).slice(0, 2);
  };
  
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route
            path="/post/:id"
            element={
              <SinglePost
                getPostById={getPostById}
                getNextPostId={getNextPostId}
                getPrevPostId={getPrevPostId}
                getRelatedPosts={getRelatedPosts}
              />
            }
          />
          <Route
            path="/"
            element={
              <>
                <CarouselComponent />
                <FeaturedPosts posts={featuredPosts} likePost={likePost} />
                <PopularVideos videos={popularVideos} bigVideos={bigPopularVideos} likeVideo={likeVideo} />
                <RecentPosts posts={recentPosts} smallPosts={smallRecentPosts} likePost={likePost} />
                <PopularStories posts={popularStories} smallPosts={smallPopularStories} miniPosts={miniPopularStories} likePost={likePost} />
                <WhatsTrending posts={trendingPosts} likePost={likePost} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;