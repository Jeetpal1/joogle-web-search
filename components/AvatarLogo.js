import Image from "next/image";
import { Avatar, IconButton } from "@mui/material";

function AvatarLogo({ url, className, onClick }) {
  return (
    <img
      src={url}
      className={`h-10 rounded-full animate-bounce cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      onClick={onClick}
    />
  );
}

export default AvatarLogo;
