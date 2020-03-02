export interface Course {
    id: string;
    title: string;
    description: string;
    image: string;
    url: string;
    isPaid: boolean;
    publish: boolean;
    youtubeVideo: string;
    cuponCode?: string;
    publishDate: string;
    updatedDate?: string;
    time: number;
}
