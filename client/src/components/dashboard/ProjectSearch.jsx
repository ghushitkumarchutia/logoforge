import { Input } from "../common/Input";
import { Search } from "lucide-react";

export const ProjectSearch = ({ value, onChange }) => {
  return (
    <div className='w-full max-w-md'>
      <Input
        name='search'
        type='text'
        placeholder='Search projects...'
        value={value}
        onChange={onChange}
        leftIcon={<Search size={18} />}
      />
    </div>
  );
};
