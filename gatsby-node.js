exports.createPages=async function ({graphql,actions}){
     const query=await graphql(`
     query{
        allContentfulBlogPost {
          edges {
            node {
              title
              slug
              subtitle
              body {
                raw
              }
              excerpt {
                excerpt
              }
              image {
                title
                fluid {
                  src
                }
              }
            }
          }
        }
      }
     `);
     console.log(JSON.stringify(query));
     const posts=query.data.allContentfulBlogPost.edges;
     posts.map((post)=>{
         actions.createPage({
             path:post.node.slug,
             component:require.resolve("./src/templates/blog.tsx"),
             context:post.node
         })
     })
}

