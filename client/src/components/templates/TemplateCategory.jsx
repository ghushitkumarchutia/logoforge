import { TEMPLATE_CATEGORIES } from "../../utils/constants";
import clsx from "clsx";

const categories = ["All", ...TEMPLATE_CATEGORIES];

export const TemplateCategory = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className='flex flex-wrap gap-2'>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category === "All" ? "" : category)}
          className={clsx(
            "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
            activeCategory === category ||
              (category === "All" && !activeCategory)
              ? "bg-green-500 text-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700",
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
