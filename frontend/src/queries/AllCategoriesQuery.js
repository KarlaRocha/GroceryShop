import graphql from 'babel-plugin-relay/macro';

const AllCategoriesQuery = graphql`
query AllCategoriesQuery {
  allCategories {
    edges {
      node {
        id
        name
        products {
          edges {
            node {
              id
              name
              description
            }
          }
        }
      }
    }
  }
}
`;

export default AllCategoriesQuery
