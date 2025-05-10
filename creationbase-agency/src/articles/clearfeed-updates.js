import React from 'react';
import BlogArticle from '../components/BlogArticle';
import { blogPosts } from '../data/blogPosts';

const ClearFeedUpdates = () => {
  const article = blogPosts.find(post => post.id === 'clearfeed-updates');
  return <BlogArticle article={article} />;
};

export default ClearFeedUpdates; 