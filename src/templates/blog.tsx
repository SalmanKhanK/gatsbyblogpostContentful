import React from 'react';
import Layout from '../component/Layout';
import { BLOCKS} from "@contentful/rich-text-types";
import { Button, Container, Grid } from '@material-ui/core/';
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Link } from 'gatsby'
import './blog.css'
const options = {
    //   renderMark: {
    //     [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    //   },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <h3>{children}</h3>,
        [BLOCKS.EMBEDDED_ASSET]: node => {
          return (
            <>
              <h2>Embedded Asset</h2>
              <pre>
                <code>{JSON.stringify(node, null, 2)}</code>
              </pre>
            </>
          )
        },
      },
    }
export default ({ pageContext }) => {
    console.log(pageContext, "PageContext")
    const { body } = pageContext;
    return (
        <Layout>
            <Container maxWidth="sm">
                <Grid item xs={12}>
                    <h1>{pageContext.title}</h1>
                    <img src={`${pageContext.image.fluid.src}`} alt="img"
                      className="img"
                    />
                    <div>{body && renderRichText(pageContext.body, options)}</div>
                    <Link to="/">
                        <Button variant="contained">Visit the Blog Page</Button>
                    </Link>
                </Grid>
            </Container>
        </Layout>
    )
}