import React from "react"
import Layout from '../component/Layout'
import {Button,Container,Grid} from "@material-ui/core/"
import "./index.css"
import {Link} from 'gatsby'
import { graphql } from 'gatsby'
const IndexPage =({data}) => {
  console.log(data,"IndexPage Data")
  const posts = data.allContentfulBlogPost.edges;
  return (
    <Layout>
      {
        posts.map((post,key)=>{
             return(
              <Container maxWidth="sm" key={key}>
              <Grid item xs={12}>
                <h1 className="heading">{post.node.title}</h1>
                <img src={`${post.node.image.fluid.src}`} alt="imgblog" className="img" />
                <br />
                <p>{post.node.excerpt.excerpt}</p>
                <Link to={`/${post.node.slug}/`}  className="linkStyle">
                  <Button variant="contained">Read Moreee</Button>
                </Link>
              </Grid>
            </Container>
             )
        })
      }
    </Layout>
  )
}

export default IndexPage;

export const query=graphql`
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
  `;
