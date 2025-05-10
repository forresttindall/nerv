import React from 'react';
import BlogArticle from '../components/BlogArticle';
import { blogPosts } from '../data/blogPosts';

const QuantumKeepBeta = () => {
  const article = blogPosts.find(post => post.id === 'quantumkeep-public-beta');
  return <BlogArticle article={article} />;
};

export default QuantumKeepBeta; 