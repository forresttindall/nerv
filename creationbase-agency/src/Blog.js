import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import quantumkeepImage from './Images/qk.png';  // Re-add image import
import clearfeedImage from './Images/clearfeed2.png';  // Re-add image import

// Blog post data structure
const blogPosts = [
    {
        id: 'quantumkeep-public-beta',
        title: "QuantumKeep Public Beta",
        excerpt: "Introducing the beta version of QuantumKeep with enhanced encryption features.",
        image: quantumkeepImage,
        date: "2025-01-28",
        category: "QuantumKeep",
        tags: ["Beta", "QuantumKeep", "Updates"],
    },
    {
        id: 'clearfeed-updates',
        title: "ClearFeed Updates",
        excerpt: "ClearFeed is a intuitive and private RSS reader. Beta Coming Soon",
        image: clearfeedImage,
        date: "2025-01-29",
        category: "ClearFeed",
        tags: ["Updates", "ClearFeed"],
    }
];

const Blog = () => {
    const [selectedFilter, setSelectedFilter] = useState('All');
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Get unique categories and tags
    const uniqueFilters = ['All'];
    const allPosts = [...blogPosts];

    allPosts.forEach(post => {
        if (!uniqueFilters.includes(post.category)) {
            uniqueFilters.push(post.category);
        }
        if (post.tags && Array.isArray(post.tags)) {
            post.tags.forEach(tag => {
                if (!uniqueFilters.includes(tag)) {
                    uniqueFilters.push(tag);
                }
            });
        }
    });
    
    // Sort posts by date (newest first) and then filter
    const filteredPosts = (selectedFilter === 'All' 
        ? [...allPosts] 
        : allPosts.filter(post => 
            post.category === selectedFilter || 
            (post.tags && post.tags.includes(selectedFilter))
        )).sort((a, b) => new Date(b.date) - new Date(a.date));

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split('-');
        const date = new Date(year, month - 1, day);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC'
        });
    };

    return (
        <div className="blog-container">
            <div className="blog-header">
                <h1>Blog</h1>
                <div className="blog-filters">
                    {uniqueFilters.map(filter => (
                        <button 
                            key={filter}
                            className={`filter-button ${selectedFilter === filter ? 'active' : ''}`}
                            onClick={() => setSelectedFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="blog-grid">
                {filteredPosts.map(post => (
                    <article key={post.id} className="blog-card">
                        <Link to={`/blog/${post.id}`} className="blog-card-link">
                            <div className="blog-card-image">
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="blog-card-content">
                                <div className="blog-card-meta">
                                    <span className="blog-card-category gradient">{post.category}</span>
                                    <span className="blog-card-date">
                                        {formatDate(post.date)}
                                    </span>
                                </div>
                                <h2>{post.title}</h2>
                                <p>{post.excerpt}</p>
                                <div className="read-more">
                                    Read More
                                    <span className="button-arrow">→</span>
                                </div>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Blog;
