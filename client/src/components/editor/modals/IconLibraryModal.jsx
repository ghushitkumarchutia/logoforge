import { useState, useEffect } from "react";
import { useDebounce } from "../../../hooks/useDebounce.js";
import { Modal } from "../../common/Modal.jsx";
import { Input } from "../../common/Input.jsx";
import { Loader } from "../../common/Loader.jsx";
import { getAllIcons } from "../../../services/iconService.js";
import { ICON_CATEGORIES } from "../../../utils/constants.js";
import { Search } from "lucide-react";

const categories = ["All", ...ICON_CATEGORIES];

export const IconLibraryModal = ({ isOpen, onClose, onSelectIcon }) => {
  const [icons, setIcons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [error, setError] = useState(null);

  const debouncedSearch = useDebounce(searchQuery, 300);

  useEffect(() => {
    if (!isOpen) return;

    const fetchIcons = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await getAllIcons(
          activeCategory || undefined,
          debouncedSearch || undefined,
        );

        if (response.success && response.data?.icons) {
          setIcons(response.data.icons);
        } else {
          setIcons([]);
        }
      } catch {
        setError("Failed to load icons");
        setIcons([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchIcons();
  }, [isOpen, activeCategory, debouncedSearch]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category === "All" ? "" : category);
  };

  const handleIconClick = (icon) => {
    onSelectIcon?.(icon);
    onClose();
  };

  const handleClose = () => {
    setSearchQuery("");
    setActiveCategory("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title='Icon Library' size='lg'>
      <div className='space-y-4'>
        <Input
          name='icon-search'
          placeholder='Search icons...'
          value={searchQuery}
          onChange={handleSearchChange}
          leftIcon={<Search size={18} />}
        />

        <div className='flex flex-wrap gap-2'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === category ||
                (category === "All" && !activeCategory)
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className='min-h-[300px] max-h-[400px] overflow-y-auto'>
          {isLoading ? (
            <div className='flex items-center justify-center h-[300px]'>
              <Loader size='lg' />
            </div>
          ) : error ? (
            <div className='flex items-center justify-center h-[300px] text-red-500'>
              {error}
            </div>
          ) : icons.length === 0 ? (
            <div className='flex items-center justify-center h-[300px] text-gray-500 dark:text-gray-400'>
              No icons found
            </div>
          ) : (
            <div className='grid grid-cols-6 sm:grid-cols-8 gap-2'>
              {icons.map((icon) => (
                <button
                  key={icon._id || icon.id || icon.name}
                  onClick={() => handleIconClick(icon)}
                  className='p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group'
                  title={icon.name}
                >
                  {icon.svg ? (
                    <div
                      className='w-8 h-8 flex items-center justify-center text-gray-600 dark:text-gray-300 group-hover:text-green-500 transition-colors'
                      dangerouslySetInnerHTML={{ __html: icon.svg }}
                    />
                  ) : icon.path ? (
                    <svg
                      className='w-8 h-8 text-gray-600 dark:text-gray-300 group-hover:text-green-500 transition-colors'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <path d={icon.path} />
                    </svg>
                  ) : (
                    <div className='w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded' />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};
