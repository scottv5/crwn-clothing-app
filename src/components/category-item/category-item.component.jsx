import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ category: { imageUrl, title } }) => {
  const navigate = useNavigate();
  return (
    <CategoryContainer>
      <BackgroundImage backgroundImage={imageUrl} />
      <BodyContainer onClick={() => navigate(`/shop/${title}`)}>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </BodyContainer>
    </CategoryContainer>
  );
};

export default CategoryItem;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url(${props.backgroundImage})`};
`;

const BodyContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  h2 {
    margin: 0 6px 0;
    font-size: 1.8rem;
    color: #4a4a4a;
  }
  p {
    font-weight: lighter;
    font-size: 1.16rem;
  }
`;

const CategoryContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & ${BodyContainer} {
      opacity: 0.9;
    }
  }
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
`;

// .category-container {
//   min-width: 30%;
//   height: 240px;
//   flex: auto;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid black;
//   margin: 0 7.5px 15px;
//   overflow: hidden;
//   &:hover {
//     cursor: pointer;
//     & .background-image {
//       transform: scale(1.1);
//       transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
//     }
//     & .category-body-container {
//       opacity: 0.9;
//     }
//   }
//   &.large {
//     height: 380px;
//   }
//   &:first-child {
//     margin-right: 7.5px;
//   }
//   &:last-child {
//     margin-left: 7.5px;
//   }
//   .background-image {
//     width: 100%;
//     height: 100%;
//     background-size: cover;
//     background-position: center;
//   }
//   .body-container {
//     height: 90px;
//     padding: 0 25px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     border: 1px solid black;
//     background-color: white;
//     opacity: 0.7;
//     position: absolute;
//     h2 {
//       margin: 0 6px 0;
//       font-size: 1.8rem;
//       color: #4a4a4a;
//     }
//     p {
//       font-weight: lighter;
//       font-size: 1.16rem;
//     }
//   }
// }
