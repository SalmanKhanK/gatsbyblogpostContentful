require("dotenv").config({
    path: `.env`,
  })
module.exports = {
    plugins: [
        'gatsby-plugin-material-ui',
        {
            resolve: `gatsby-source-contentful`,

            options: {
              spaceId: process.env.spaceId,
              accessToken: process.env.accessToken,
            },
          }
    ]
}