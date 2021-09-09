import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface PostContentProps {
  html: string;
}

const MarkdownRenderer = styled.div`
  // Renderer Style
  font-family: Arial;
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 100px 0;
  word-break: break-all;

  // Markdown Style
  line-height: 1.8;
  font-family: Arial;
  font-size: 16px;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  * {
    font-family: Arial;
  }

  ul li {
    list-style: square;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 10px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 0;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-family: Arial;
    font-size: 30px;
  }

  h2 {
    font-family: Arial;
    font-size: 25px;
  }

  h3 {
    font-family: Arial;
    font-size: 20px;
  }

  h4 {
    font-family: Arial;
    font-size: 16px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-family: Arial;
    font-weight: 800;
  }

  // Adjust List Element Style

  ol {
    margin-left: 20px;
    line-height: 1.8;
  }

  ul {
    margin-left: 20px;
    line-height: 1.8;
  }

  li {
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: Arial;
    margin-left: 20px;
    line-height: 1.8;
  }

  // Adjust Horizontal Rule Style
  hr {
    border: 1px solid #000000;
    margin: 50px 0;
  }

  // Adjust Table Style
  table {
    margin-right: auto;
    border-spacing: 0;
    border-right: 1px solid black;
  }
  th {
    font-family: Arial;
    padding: 3px 10px;
    background-color: #d1ecf1;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
  }
  td {
    font-family: Arial;
    padding: 3px 10px;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
  }

  // Adjust Link Element Style
  a {
    font-family: Arial;
    color: #4263eb;
    text-decoration: underline;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-family: Arial;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }
  ,
  code [class*='language-'] {
    tab-size: 2;
    font-family: Arial;
    font-size: 15px;
  }
  ,
  span {
    font-family: Arial;
    tab-size: 4;
  }
  ,
  .text {
    font-family: Arial;
  }

  // Markdown Responsive Design
  @media (max-width: 768px) {
    width: 100%;
    padding: 80px 20px;
    line-height: 1.6;
    font-family: Arial;
    font-size: 14px;

    h1 {
      font-family: Arial;
      font-size: 23px;
    }

    h2 {
      font-family: Arial;
      font-size: 20px;
    }

    h3 {
      font-family: Arial;
      font-size: 17px;
    }

    h4 {
      font-family: Arial;
    }

    img {
      width: 100%;
    }

    hr {
      font-family: Arial;
      margin: 20px 0;
    }
  }
`;

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};

export default PostContent;
