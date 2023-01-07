import "./category-item.styles.scss";

const CategoryItem = ({ category: { imageUrl, title } }) => (
  <div className="category-container">
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="body-container">
      <h2>{title[0].toUpperCase() + title.slice(1)}</h2>
      <p>Shop Now</p>
    </div>
  </div>
);

export default CategoryItem;
