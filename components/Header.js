import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import AvatarLogo from "./AvatarLogo";
import HeaderOptions from "./HeaderOptions";
import toast from "react-hot-toast";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const notifyUser = () =>
    toast(
      "Hold Up, buddy. I am still working on that part. Why don't you search something.",
      {
        icon: "🌟",
      }
    );

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src={"/static/img/joogleLogo.png"}
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
          alt="Joogle Logo"
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
            defaultValue={router.query.term}
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />

          <MicrophoneIcon
            className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer"
            onClick={notifyUser}
          />

          <SearchIcon
            className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer"
            onClick={search}
          />

          <button type="submit" hidden onClick={search}>
            Search
          </button>
        </form>
        <AvatarLogo
          className="ml-auto"
          url={
            "https://jooglewebsearch.vercel.app/_next/image?url=%2Fstatic%2Fimg%2FjoogleLogo.png&w=384&q=75"
          }
          onClick={() => {
            router.push("/");
          }}
        />
      </div>

      <HeaderOptions notifyUser={notifyUser}/>
    </header>
  );
}

export default Header;
