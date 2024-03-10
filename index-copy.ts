import { getCookie, igApi } from "insta-fetcher";
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

// some example with proxy, but i never test it
// some example with proxy, but i never test it
let ig = new igApi("your cookie", false, {
  proxy: {
    host: 'proxy-url',
    port: 80,
    auth: {username: 'my-user', password: 'my-password'}
}
});

// Public post
ig.fetchPost("https://www.instagram.com/reel/CXhW_4sp32Z/").then((res) => {
console.log(res);
});

// User data
ig.fetchUser("mg.creativestudio").then((res) => {
console.log(res);
});

// Fetch stories
ig.fetchStories("adiraas.p").then((res) => {
console.log(res);
});

// Fetch highlights
ig.fetchHighlights("adiraas.p").then((res) => {
console.log(res);
});

