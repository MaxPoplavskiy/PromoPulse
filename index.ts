import { IgApiClient } from 'instagram-private-api';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

async function func() {
    const ig = new IgApiClient();
    ig.state.generateDevice(process.env.IG_USERNAME!);
    await ig.account.login(process.env.IG_USERNAME!, process.env.IG_PASSWORD!);

    try {
        const postId = 'C4Qtvk7Nzcw'; // Replace with your actual post ID
        const likers = await ig.media.likers(postId);
        console.log('Users who liked the post:', likers);
    } catch (error) {
        console.error('Error fetching likes:', (error as Error).message);
    }
}

func();