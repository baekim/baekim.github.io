import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

interface PostItemProps {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  thumbnail: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  link: string;
}

// const ThumbnailImage = styled(Img)`
//   width: 100%;
//   height: 200px;
//   border-radius: 10px 10px 0 0;
// `;
const ThumbnailImage = styled(Img)`
  width: 150px;
  height: 100px;
  border-radius: 10px;
`;

// const PostItemWrapper = styled(Link)`
//   display: flex;
//   flex-direction: column;
//   border-radius: 10px;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
//   transition: 0.3s box-shadow;
//   cursor: pointer;

//   &:hover {
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
//   }
// `;
const PostItemWrapper = styled(Link)`
  // display: flex;
  // flex-direction: column;
  // display: table;
  // table-layout: fixed;
  width: 100%;

  display: grid;
  grid-template-columns: 170px auto;
  grid-template-rows: auto;
  padding: 5px;

  border-spacing: 5px;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  transition: 0.3s box-shadow;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

// const PostItemContent = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   padding: 15px;
//   font-family: Arial;
// `;
const PostItemContent = styled.div`
  // flex: 1;
  // display: flex;
  // flex-direction: column;
  // padding: 15px;
  // display: table-cell;
  font-family: Arial;
`;

const Title = styled.div`
  display: -webkit-box;
  display: inline;
  overflow: hidden;
  margin-bottom: 5px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 20px;
  font-weight: 500;
  font-family: Arial;
  margin-top: 15px;
  color: #3c4754;
`;

// const Date = styled.div`
//   font-size: 14px;
//   font-weight: 400;
//   font-family: Arial;
//   opacity: 0.7;
// `;
const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  font-family: Arial;
  // opacity: 0.7;
  color: #3c4754;
  margin-top: 12px;
  margin-left: 1px;
`;

// const Category = styled.div`
//   display: flex;
//   font-family: Arial;
//   flex-wrap: wrap;
//   margin-top: 10px;
//   margin: 10px -5px;

//   border: 1px solid purple;
// `;
const Category = styled.div`
  display: flex;
  font-family: Arial;
  flex-wrap: wrap;
  margin-left: -5px;
  margin-top: 5px;
`;

const CategoryItem = styled.div`
  margin: 2.5px 5px;
  padding: 3px 5px;
  border-radius: 3px;
  background: #3c4754;
  font-family: Arial;
  font-size: 14px;
  font-weight: 400;
  color: white;
`;

const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-top: 2px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-family: Arial;
  font-size: 16px;
  opacity: 0.8;
`;

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { fluid },
  },
  link,
}) {
  return (
    <PostItemWrapper to={link}>
      <ThumbnailImage fluid={fluid} alt="Post Item Image" />
      <PostItemContent>
        <Date>{date}</Date>
        <Title>{title}</Title>
        {/* <Summary>{summary}</Summary> */}
        <Category>
          {categories.map(item => (
            <CategoryItem key={item}>{item}</CategoryItem>
          ))}
        </Category>
      </PostItemContent>
    </PostItemWrapper>
  );
};

export default PostItem;
