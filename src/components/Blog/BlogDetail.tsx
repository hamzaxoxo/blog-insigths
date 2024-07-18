'use client'

import { fetchSinglePost } from '@/conf/postService';
import parse from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { Post } from '../Type/Types';
import AuthorCard from './AuthorCard';
import { DiscussionEmbed } from 'disqus-react';
import BlogPostSection from './BlogPostSection';

const BlogDetail = () => {
    const [post, setPost] = React.useState<Post | null>(null);
    const [error, setError] = React.useState<string | null>(null);
    const { slug } = useParams();

    React.useEffect(() => {
        const loadPost = async () => {
            try {
                const fetchedPost = await fetchSinglePost(Array.isArray(slug) ? slug[0] : slug);
                setPost(fetchedPost);
            } catch (error) {
                console.error('Error loading post:', error);
                setError('Failed to load post');
            }
        };

        loadPost();
    }, [slug]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <main className="px-10 max-w-6xl mx-auto mt-10">
            <BlogPostSection post={post} />
            <div className="flex flex-col lg:flex-row lg:space-x-12">
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">The Ultimate Guide to Web Hosting: Everything You Need to Know</h2>
                    <p className="mb-6">In today&#39;s digital age, a strong online presence is important for businesses and individuals alike. Whether you&#39;re starting a personal blog, an e-commerce site, or a corporate website, choosing the right web hosting service is the foundation of your online success. In this comprehensive guide, we&#39;ll cover everything you need to know about web hosting, how it works, the different hosting options available, and how to choose the right web hosting package for your needs.</p>

                    <div className="flex justify-center mb-8">
                        <img src="https://media.graphassets.com/resize=width:1280,height:750/uyRdELJGQmaM1QJnPVtR" alt="what is web hosting" title="hosting.avif" className="rounded-lg shadow-md" />
                    </div>

                    <h2 className="text-3xl font-semibold text-blue-600 mb-4">What is Web Hosting?</h2>
                    <p className="mb-6">Web hosting is a service that allows individuals and organizations to make their websites accessible on the Internet. When you build a website, its files need to be stored somewhere so that users can access them online. Web hosting providers offer the technology and infrastructure needed to store these files on their servers and make them available to users over the Internet.</p>

                    <h2 className="text-3xl font-semibold text-blue-600 mb-4">How Web Hosting Works?</h2>
                    <p className="mb-4">Understanding how web hosting works is essential to making informed decisions about your website. Here&#39;s a simple breakdown:</p>
                    <ol className="list-decimal list-inside mb-6">
                        <li className="mb-2"><strong>Domain Registration:</strong> Before you can host your website, you need a domain name, which is your website&#39;s address on the Internet (for example, www.yourwebsite.com). You can register a domain through a domain registrar.</li>
                        <li className="mb-2"><strong>Choosing a Hosting Plan:</strong> Once you have a domain, you choose a web hosting plan based on your needs. This plan determines the server space, bandwidth, and other resources allocated to your website.</li>
                        <li className="mb-2"><strong>Uploading Website Files:</strong> After purchasing a hosting plan, you will upload your website files (HTML, CSS, images, etc.) to the server using a control panel such as cPanel or FTP software.</li>
                        <li className="mb-2"><strong>Server Configuration:</strong> The hosting provider manages the technical aspects of the server, such as software updates, security, and performance optimization, ensuring that your website runs smoothly.</li>
                        <li className="mb-2"><strong>Website Access:</strong> When someone enters your domain name into their browser, the browser sends a request to the server hosting your website. The server then delivers the requested web pages to the user&#39;s browser, making your website accessible to them.</li>
                    </ol>

                    <h2 className="text-3xl font-semibold text-blue-600 mb-4">What Web Hosting Options Are Available?</h2>
                    <p className="mb-4">Choosing the right web hosting option is crucial to your website&#39;s performance and growth. Here are the most common web hosting options:</p>
                    <ol className="list-decimal list-inside mb-6">
                        <li className="mb-2"><strong>Shared Hosting:</strong> In shared hosting, multiple websites share the same server and its resources. It is suitable for small to medium websites with low cost and moderate traffic.</li>
                        <li className="mb-2"><strong>VPS Hosting:</strong> Virtual Private Server (VPS) hosting provides a dedicated portion of a physical server for your website. It offers more resources and control than shared hosting, making it ideal for growing websites.</li>
                        <li className="mb-2"><strong>Dedicated Hosting:</strong> With dedicated hosting, you get an entire server exclusively for your website. This option offers maximum control, performance, and security, suitable for large websites with high traffic.</li>
                        <li className="mb-2"><strong>Cloud Hosting:</strong> Cloud hosting uses a network of servers to distribute resources and ensure high availability. It&#39;s scalable and reliable, making it an excellent choice for websites with variable traffic and resource needs.</li>
                        <li className="mb-2"><strong>WordPress Hosting:</strong> Optimized specifically for WordPress websites, this hosting option includes features like one-click WordPress installation, automatic updates, and enhanced security.</li>
                        <li className="mb-2"><strong>Reseller Hosting:</strong> This allows you to resell hosting services to other users. It is ideal for entrepreneurs who want to start their own hosting business.</li>
                    </ol>

                    <h2 className="text-3xl font-semibold text-blue-600 mb-4">How to Choose the Right Web Hosting Package?</h2>
                    <p className="mb-4">Choosing the right web hosting package is essential to the success of your website. Consider the following factors to make an informed decision:</p>
                    <ul className="list-disc list-inside mb-6">
                        <li className="mb-2"><strong>Website Requirements:</strong> Determine the type of website you are building. For a personal blog or small business website, shared hosting may be sufficient. For larger sites or e-commerce platforms, consider VPS, dedicated, or cloud hosting.</li>
                        <li className="mb-2"><strong>Traffic Forecasts:</strong> Estimate your website traffic. Shared hosting is suitable for low to moderate traffic, while VPS or dedicated hosting is better for high traffic websites.</li>
                        <li className="mb-2"><strong>Scalability:</strong> Choose a hosting provider that offers scalable solutions. As your website grows, you should be able to upgrade your hosting plan without significant downtime or hassle.</li>
                        <li className="mb-2"><strong>Performance and Uptime:</strong> Look for a hosting provider that guarantees high uptime (99.9% or more) and fast loading times. This ensures that your website is always accessible and performs well.</li>
                        <li className="mb-2"><strong>Security Features:</strong> Make sure the hosting provider offers strong security features like SSL certificates, regular backups, malware scanning, and firewalls to protect your website from threats.</li>
                        <li className="mb-2"><strong>Support and Customer Service:</strong> Reliable customer support is very important. Choose a hosting provider that offers 24/7 support through various channels, such as live chat, email, and phone.</li>
                        <li className="mb-2"><strong>Price and Cost:</strong> Compare hosting plans and prices to find the best value for your budget. Keep in mind that the cheapest option is not always the best. Consider the features and resources included in the plan.</li>
                        <li className="mb-2"><strong>User Reviews and Reputation:</strong> Research customer reviews and reputation of the hosting provider. This can give you insight into their reliability, performance, and customer service.</li>
                    </ul>

                    <h2 className="text-3xl font-semibold text-blue-600 mb-4">My View on Web Hosting</h2>
                    <p className="mb-4">Web hosting is the cornerstone of any online presence. This involves storing website files on a server so that they can be accessed over the Internet. There are several types of hosting available:</p>
                    <ul className="list-disc list-inside mb-6">
                        <li className="mb-2"><strong>Shared Hosting:</strong> Best for small to medium-sized websites due to cost-effectiveness. However, resource sharing can affect performance during periods of increased traffic.</li>
                        <li className="mb-2"><strong>VPS Hosting:</strong> Offers more control and resources than shared hosting, making it suitable for growing websites.</li>
                        <li className="mb-2"><strong>Dedicated Hosting:</strong> Ideal for large websites with high traffic, offering maximum performance and security, but at a higher cost.</li>
                        <li className="mb-2"><strong>Cloud Hosting:</strong> Provides scalability and reliability through a network of servers, perfect for websites with variable traffic.</li>
                        <li className="mb-2"><strong>WordPress Hosting:</strong> Designed for WordPress sites, offering better performance and security features.</li>
                        <li className="mb-2"><strong>Reseller Hosting:</strong> Allows users to resell hosting services, perfect for those looking to start their own hosting business.</li>
                    </ul>
                    <p className="mb-6">Choosing the right hosting package depends on your website&#39;s needs, expected traffic, and growth potential. Performance, security, and customer support must be prioritized. By carefully evaluating these factors, you can ensure a strong and reliable online presence.</p>
                </div>
            </div>
        </main>

    );
}

export default BlogDetail;
