import { graphql } from "gatsby"

export const blogPostFragment = graphql`
    fragment BlogPostFragment on ContentfulBlogPost {
        id
        slug
        tags
        title
        publishDate(formatString: "MMMM DD , YYYY")
        description {
            description
        }
        author {
            name
        }
    }
`