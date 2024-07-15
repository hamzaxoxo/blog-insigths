export interface Author {
    name: string;
    picture: {
        url: string
    }
}

export interface Image {
    url: string;
}

export interface Content {
    html: string;
}

export interface Post {
    id: string;
    title: string;
    slug: string;
    coverImage: Image;
    content: Content;
    publishedAt: Date;
    author: Author;
}
