import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPage = ({ data }) => {
  console.log(data);
  const posts = data.allMdx.nodes;
  return (
    <Layout pageTitle="My Blog Posts">
      {posts.map((post) => {
        return (
          <article key={post.id}>
            <h2>
              <Link to={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
            </h2>
            <p>{post.frontmatter.date}</p>
          </article>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
