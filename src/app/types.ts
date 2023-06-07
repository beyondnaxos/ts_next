export interface Post {
    id: number;
    title: string;
    content : string;
}

export interface Comment {
    id: number;
    postId: number;
    content: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar: string;
}
