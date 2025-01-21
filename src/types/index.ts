export interface Tweet {
    id: string;
    text: string;
    user: {
        id: string;
        name: string;
        username: string;
    };
    createdAt: string;
}

export interface InterestingInfo {
    summary: string;
    keywords: string[];
    relatedTweets: Tweet[];
}