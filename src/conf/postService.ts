
import { Post } from '@/components/Type/Types';
import axios from 'axios';
const API_URL = 'https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clymic8x3075t07w7jmdwf7wk/master';

const GET_ALL_POSTS_QUERY = `
{
  posts {
    id
    title
    slug
    content{
      html
    }
    coverImage{
      url
    }
    publishedAt
    author {
      name
      picture {
        url
      }
    }
  }
}
`;
const GET_SINGLE_POST_QUERY = (slug: string) => `
{
  post(where: {slug: "${slug}"}) {
    id
    title
    slug
    content {
      html
    }
    coverImage {
      url
    }
    publishedAt
    author {
      name
      picture {
        url
      }
    }
  }
}
`;
export const fetchPosts = async (): Promise<Post[]> => {
    try {
        const response = await axios.post(API_URL, {
            query: GET_ALL_POSTS_QUERY,
        });
        return response?.data?.data?.posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw new Error('Failed to fetch posts');
    }
};

export const fetchSinglePost = async (slug: string): Promise<Post> => {
    try {
        const response = await axios.post(API_URL, {
            query: GET_SINGLE_POST_QUERY(slug),
        });
        return response?.data?.data?.post;
    } catch (error) {
        console.error('Error fetching post:', error);
        throw new Error('Failed to fetch post');
    }
};