import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './BlogArticle.css';

// Import images
import qkImage from '../Images/qk.png';
import clearfeedImage from '../Images/clearfeed2.png';
import socialShareImage from '../Images/socialshare.png';

const BlogArticle = ({ article }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!article) return null;

    // Get the correct image based on article ID
    const getArticleImage = (id) => {
        switch(id) {
            case 'quantumkeep-public-beta':
                return qkImage;
            case 'clearfeed-updates':
                return clearfeedImage;
            default:
                return socialShareImage;
        }
    };

    const articleImage = getArticleImage(article.id);
    const baseUrl = 'https://creationbase.io';
    const articleUrl = `${baseUrl}/#/blog/${article.id}`;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC'
        });
    };

    return (
        <>
            <Helmet>
                <title>{article.title} | CreationBase</title>
                <meta name="title" content={article.title} />
                <meta name="description" content={article.excerpt} />

                <meta property="og:type" content="article" />
                <meta property="og:url" content={articleUrl} />
                <meta property="og:title" content={article.title} />
                <meta property="og:description" content={article.excerpt} />
                <meta property="og:image" content={articleImage} />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={articleUrl} />
                <meta property="twitter:title" content={article.title} />
                <meta property="twitter:description" content={article.excerpt} />
                <meta property="twitter:image" content={articleImage} />

                {/* Article Specific */}
                <meta property="article:published_time" content={article.date} />
                <meta property="article:section" content={article.category} />
                {article.tags.map(tag => (
                    <meta key={tag} property="article:tag" content={tag} />
                ))}
            </Helmet>

            <div className="blog-article">
                <div className="article-header">
                    <div className="article-meta">
                        <span className="article-category gradient">{article.category}</span>
                        <span className="article-date">{formatDate(article.date)}</span>
                    </div>
                    <h1>{article.title}</h1>
                </div>

                <div className="article-featured-image">
                    <img src={articleImage} alt={article.title} />
                </div>

                <div className="article-content" 
                    dangerouslySetInnerHTML={{ __html: article.content }} 
                />

                <div className="article-tags">
                    {article.tags.map(tag => (
                        <span key={tag} className="article-tag">{tag}</span>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BlogArticle; 