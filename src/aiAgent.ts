import { Tweet, InterestingInfo } from './types';

export class AIAgent {
    analyzeTweets(tweets: Tweet[]): InterestingInfo {
        // Add your analysis logic here
        return {
            summary: "Summary of findings",
            keywords: ["keyword1", "keyword2"],
            relatedTweets: tweets
        };
    }
}

export default AIAgent;