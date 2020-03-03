export interface ResultPosts {
    info: Info;
    posts: Post[];
}

export interface Post {
    id: string;
    title: string;
    subtitle: string;
    text: string;
    author: Author;
    createdAt: string;
    updatedAt: string;
    active: boolean;
    thumbnail: string;
    important?: boolean;
    url: string;
}

interface PostInput {
    authorId: string;
    title: string;
    substitle: string;
    text: string;
    thumbnail?: string;
    categoriesIds: Array<CategoryInput>;
    url: string;
    createdAt: string;
    updateAt: string;
    tags?: Array<TagInput>;
    active: boolean;
    important?: boolean;
    cover?: boolean;
}

export interface TagInput {
    tag: string;
    description: string;
    active?: boolean;
}

export interface CategoryInput {
    id?: string;
    title?: string;
    description?: string;
    createdAt?: string;
    updatedDate?: string;
    color?: string;
    active?: boolean;
}

export interface Author {
    id: string;
    name: string;
    lastname: string;
    email: string;
    username?: any;
}

export interface Info {
    itemsPage: number;
    page: number;
    pages: number;
    total: number;
}
