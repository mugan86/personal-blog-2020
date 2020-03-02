export interface Project {
    id: string;
    name: string;
    url: string;
    urlTitle: string;
    intro: string;
    description: string;
    categories?: any;
    startData: string;
    finishData: string;
    active: boolean;
    important: boolean;
    finish: boolean;
    thumbnail: string;
    details: string[];
}
