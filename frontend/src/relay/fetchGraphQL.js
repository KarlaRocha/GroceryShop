// your-app-name/src/fetchGraphQL.js
const fetchGraphQL = async (text, variables) => {
  
    // Fetch data from GitHub's GraphQL API:
    const response = await fetch('http://127.0.0.1:8000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: text,
        variables,
      }),
    });
  
    // Get the response as JSON
    return await response.json();
  }
  
  export default fetchGraphQL;