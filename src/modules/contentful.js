import { createClient } from "contentful";

// Eigene API-Accsesstoken von contentful
let contentfulClient = createClient({
    space: 'dl5oa5cmr10s',
    accessToken: 'OfCKawLQyhZr0qjdFySJVjCwuFM33cZC55q1nb6DCW8'
});

export default contentfulClient;