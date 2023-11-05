import { categories } from "../data/categoriesData";

import "../styles/categories.scss";

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => {
        return (
          <div key={id} className="category-container">
            <div
              className="background-image"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="category-body-container">
              <h2>{title}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Categories;
