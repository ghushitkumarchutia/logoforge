import { Link } from "react-router-dom";
import { Button } from "../common/Button";
import { Plus } from "lucide-react";
import { ROUTES } from "../../utils/constants";

export const CreateProjectBtn = () => {
  return (
    <Link to={ROUTES.EDITOR}>
      <Button leftIcon={<Plus size={20} />}>New Project</Button>
    </Link>
  );
};
