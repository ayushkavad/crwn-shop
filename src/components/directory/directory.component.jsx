import CategoryItem from '../catagory.item/catagory.item.component';
import './directory.styles.scss';

const Directory = ({ categories }) => {
  console.log(categories);
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
