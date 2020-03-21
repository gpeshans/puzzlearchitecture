import * as React from 'react';
import { graphql } from 'gatsby';

interface TemplateProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: Date;
      };
      html: string;
    };
  };
}

const Template = ({ data }: TemplateProps) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default Template;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
