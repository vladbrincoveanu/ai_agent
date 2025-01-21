import { TwitterClient } from './twitterClient';
import { AIAgent } from './aiAgent';
import { config } from '../config/config';

const twitterClient = new TwitterClient(config.twitterApiKey, config.twitterApiSecret);
const aiAgent = new AIAgent();

async function main() {
    try {
        const tweets = await twitterClient.fetchTweets('interesting topic');
        const findings = aiAgent.analyzeTweets(tweets);
        await twitterClient.postTweet(findings);
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

main();