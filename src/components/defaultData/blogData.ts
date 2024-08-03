
import post from "../../../public/post.png";

export interface Blog {
    id: number;
    title: string;
    imgSrc: string;
    imgAlt: string;
    category: string;
    summary: string;
    author: string;
    authorImgSrc: string;
    date: string;
    categoryLink: string;
    postLink: string;
    authorLink: string;
}

export const blogData: Blog[] = [
    {
        id: 1,
        title: "TypeScript: Best Practices & Tools for QA Engineer",
        imgSrc: post.src,
        imgAlt: "TypeScript tools for QA",
        category: "testing tool",
        summary: "JavaScript is a popular programming language commonly used for web development. According to the StackOverflow Survey of 2023, it has been the top-used programming language for 10 years.",
        author: "Olga Sheremeta",
        authorImgSrc: "https://testomat.io/wp-content/uploads/2022/10/a9e43008df5b542483fcc412c4bb0753.png",
        date: "2024-07-02",
        categoryLink: "https://testomat.io/tag/testing-tool/",
        postLink: "https://testomat.io/blog/typescript-best-practices-tools-for-qa-engineer/",
        authorLink: "https://testomat.io/author/editor/"
    },
    {
        id: 2,
        title: "Understanding Agile Methodologies in Software Testing",
        imgSrc: post.src,
        imgAlt: "Agile Methodologies",
        category: "agile",
        summary: "Agile methodologies are crucial for modern software development. Learn the best practices for integrating agile into your QA processes.",
        author: "John Doe",
        authorImgSrc: "https://testomat.io/wp-content/uploads/2022/10/a9e43008df5b542483fcc412c4bb0753.png",
        date: "2024-07-03",
        categoryLink: "https://testomat.io/tag/agile/",
        postLink: "https://testomat.io/blog/understanding-agile-methodologies/",
        authorLink: "https://testomat.io/author/john-doe/"
    },
    {
        id: 3,
        title: "The Importance of Test Automation in Continuous Integration",
        imgSrc: post.src,
        imgAlt: "Test Automation",
        category: "automation testing",
        summary: "Continuous Integration and Test Automation are a match made in heaven. Discover why test automation is essential for CI.",
        author: "Jane Smith",
        authorImgSrc: "https://testomat.io/wp-content/uploads/2022/10/a9e43008df5b542483fcc412c4bb0753.png",
        date: "2024-07-04",
        categoryLink: "https://testomat.io/tag/automation-testing/",
        postLink: "https://testomat.io/blog/test-automation-in-ci/",
        authorLink: "https://testomat.io/author/jane-smith/"
    },
    {
        id: 4,
        title: "API Testing: Tools and Best Practices",
        imgSrc: post.src,
        imgAlt: "API Testing",
        category: "api testing",
        summary: "API testing ensures your backend is as reliable as your frontend. Learn about the best tools and practices for effective API testing.",
        author: "Alice Johnson",
        authorImgSrc: "https://testomat.io/wp-content/uploads/2022/10/a9e43008df5b542483fcc412c4bb0753.png",
        date: "2024-07-05",
        categoryLink: "https://testomat.io/tag/api-testing/",
        postLink: "https://testomat.io/blog/api-testing-tools-practices/",
        authorLink: "https://testomat.io/author/alice-johnson/"
    },
    {
        id: 5,
        title: "BDD with Cucumber: A Step-by-Step Guide",
        imgSrc: post.src,
        imgAlt: "BDD with Cucumber",
        category: "bdd",
        summary: "Behavior Driven Development (BDD) with Cucumber is a powerful combination. This guide walks you through the basics and beyond.",
        author: "Bob Brown",
        authorImgSrc: "https://testomat.io/wp-content/uploads/2022/10/a9e43008df5b542483fcc412c4bb0753.png",
        date: "2024-07-06",
        categoryLink: "https://testomat.io/tag/bdd/",
        postLink: "https://testomat.io/blog/bdd-with-cucumber-guide/",
        authorLink: "https://testomat.io/author/bob-brown/"
    },
    {
        id: 6,
        title: "Cypress: The Future of Frontend Testing",
        imgSrc: post.src,
        imgAlt: "Cypress Testing",
        category: "cypress",
        summary: "Cypress is quickly becoming the go-to tool for frontend testing. Learn why it's gaining popularity and how to use it effectively.",
        author: "Charlie Davis",
        authorImgSrc: "https://testomat.io/wp-content/uploads/2022/10/a9e43008df5b542483fcc412c4bb0753.png",
        date: "2024-07-07",
        categoryLink: "https://testomat.io/tag/cypress/",
        postLink: "https://testomat.io/blog/cypress-frontend-testing/",
        authorLink: "https://testomat.io/author/charlie-davis/"
    },
    {
        id: 7,
        title: "Integrating JavaScript Testing Tools in Your Workflow",
        imgSrc: post.src,
        imgAlt: "JavaScript Testing Tools",
        category: "javascript",
        summary: "JavaScript testing tools are essential for modern web development. This article covers how to integrate them into your workflow.",
        author: "Dana Evans",
        authorImgSrc: "https://testomat.io/wp-content/uploads/2022/10/a9e43008df5b542483fcc412c4bb0753.png",
        date: "2024-07-08",
        categoryLink: "https://testomat.io/tag/javascript/",
        postLink: "https://testomat.io/blog/javascript-testing-tools/",
        authorLink: "https://testomat.io/author/dana-evans/"
    },
    {
        id: 8,
        title: "Effective Mobile Testing Strategies",
        imgSrc: post.src,
        imgAlt: "Mobile Testing",
        category: "mobile testing",
        summary: "Mobile testing is crucial as more users access services via mobile devices. Learn effective strategies for mobile testing.",
        author: "Eve Foster",
        authorImgSrc: "https://testomat.io/wp-content/uploads/2022/10/a9e43008df5b542483fcc412c4bb0753.png",
        date: "2024-07-09",
        categoryLink: "https://testomat.io/tag/mobile-testing/",
        postLink: "https://testomat.io/blog/mobile-testing-strategies/",
        authorLink: "https://testomat.io/author/eve-foster/"
    },
    {
        id: 9,
        title: "Test Management Insights: Tools and Best Practices",
        imgSrc: post.src,
        imgAlt: "Test Management",
        category: "test management",
        summary: "Effective test management is key to successful software projects. Discover the best tools and practices for managing your tests.",
        author: "Frank Green",
        authorImgSrc: "https://testomat.io/wp-content/uploads/2022/10/a9e43008df5b542483fcc412c4bb0753.png",
        date: "2024-07-10",
        categoryLink: "https://testomat.io/tag/test-management/",
        postLink: "https://testomat.io/blog/test-management-insights/",
        authorLink: "https://testomat.io/author/frank-green/"
    },
    {
        id: 10,
        title: "CI/CD Best Practices for QA Engineers",
        imgSrc: post.src,
        imgAlt: "CI/CD Best Practices",
        category: "ci/cd",
        summary: "Continuous Integration and Continuous Deployment (CI/CD) are vital for modern development. Learn best practices for QA engineers.",
        author: "Grace Harris",
        authorImgSrc: "https://testomat.io/wp-content/uploads/2022/10/a9e43008df5b542483fcc412c4bb0753.png",
        date: "2024-07-11",
        categoryLink: "https://testomat.io/tag/ci-cd/",
        postLink: "https://testomat.io/blog/ci-cd-best-practices/",
        authorLink: "https://testomat.io/author/grace-harris/"
    }
];
