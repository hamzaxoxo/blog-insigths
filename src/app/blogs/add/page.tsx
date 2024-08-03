import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Add Blog Post',
    description: 'Create and publish new blog posts to share your insights and stories with our community. Join our blogging platform and start writing today.',
    keywords: ['add blog post', 'create blog', 'publish blog', 'write blog', 'blogging platform'],
};

export default function page() {

    return (
        <div>
            <h1>Add Blog Post</h1>
            <p>Create and publish new blog posts to share your insights and stories with our community. Join our blogging platform and start writing today.</p>
        </div>
    )
}
