import Image from "next/image";
import { Avatar, IconButton } from "@mui/material";

function AvatarLogo({ url, className }) {
  return <Avatar src={url}  className={`rounded-full animate-bounce cursor-pointer transition duration-150 transform hover:scale-110 ${className}`} />;
}

export default AvatarLogo;