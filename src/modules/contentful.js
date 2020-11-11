import { createClient } from "contentful";

// eigene API token
let contentfulClient = createClient({
    space: '80c03r0wfd8q',
    accessToken: 'D_yGVdTeebDfEbT-cM-TeNGDPzXp3e7ResHmbzbG9w'
});

export default contentfulClient;