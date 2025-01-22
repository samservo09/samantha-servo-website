// lib/contentful.js
import { createClient } from 'contentful';

// Debugging log to check if environment variables are being loaded correctly
console.log('Contentful Space ID:', process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID);
console.log('Contentful Access Token:', process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN);

const spaceid = 'u42cxdmlva6n';
const tokenid = 'OenKLiSxwkF-zXeNoNhpmutRoUb7UfBn0lbNTto16Nc';

// Create a client to interact with Contentful
const client = createClient({
  space: spaceid, 
  accessToken: tokenid,
});

export async function fetchContent(contentType) {
  const entries = await client.getEntries({
    content_type: contentType, // Fetch content by content type (e.g., 'project', 'talk')
  });
  return entries.items;
}
