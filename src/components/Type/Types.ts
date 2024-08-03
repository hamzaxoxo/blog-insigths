import { IconType } from "react-icons";

export interface Tag {
    id: string;
    name: string;
}

export interface Post {
    id: string;
    title: string;
    slug: string;
    coverImage: {
        url: string
    }
    excerpt: string;
    content: {
        text: any;
        html: string;
    };
    publishedAt: Date;
    tags: Tag[];
    author: {
        name: string;
        biography: string;
        picture: {
            url: string
        }
    }

}


export interface Link {
    name: string;
    path: string;
}

export interface SocialMediaLink {
    name: string;
    url: string;
    icon: IconType;
}