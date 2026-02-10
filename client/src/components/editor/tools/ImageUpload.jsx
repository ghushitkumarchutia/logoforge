import { useRef, useContext } from "react";
import { CanvasContext } from "../../../contexts/CanvasContext.jsx";
import { uploadImage } from "../../../services/uploadService";
import { Tooltip } from "../../common/Tooltip.jsx";
import toast from "react-hot-toast";
import { ImagePlus } from "lucide-react";

const API_ORIGIN =
  import.meta.env.VITE_API_BASE_URL?.replace("/api/v1", "") || "";

export const ImageUpload = () => {
  const { canvas } = useContext(CanvasContext);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    e.target.value = "";

    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be less than 5MB");
      return;
    }

    const loadingToast = toast.loading("Uploading image...");

    try {
      const response = await uploadImage(file);
      const imageUrl = `${API_ORIGIN}${response.data.url}`;

      if (!canvas) {
        toast.dismiss(loadingToast);
        toast.error("Canvas not ready");
        return;
      }

      const fabric = await import("fabric");
      const fabricModule = fabric.fabric || fabric;

      fabricModule.Image.fromURL(
        imageUrl,
        (img) => {
          const maxWidth = canvas.width * 0.5;
          const maxHeight = canvas.height * 0.5;
          const scale = Math.min(
            maxWidth / img.width,
            maxHeight / img.height,
            1,
          );

          img.set({
            left: canvas.width / 2,
            top: canvas.height / 2,
            originX: "center",
            originY: "center",
            scaleX: scale,
            scaleY: scale,
          });

          canvas.add(img);
          canvas.setActiveObject(img);
          canvas.renderAll();

          toast.dismiss(loadingToast);
          toast.success("Image added to canvas");
        },
        { crossOrigin: "anonymous" },
      );
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error(error.message || "Failed to upload image");
    }
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type='file'
        accept='image/jpeg,image/png,image/gif,image/webp,image/svg+xml'
        onChange={handleFileChange}
        className='hidden'
      />
      <Tooltip content='Upload Image' position='bottom'>
        <button
          onClick={handleClick}
          className='p-2 text-gray-600 hover:text-green-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors'
        >
          <ImagePlus size={20} />
        </button>
      </Tooltip>
    </>
  );
};
