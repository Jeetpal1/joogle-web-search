import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

function HeaderOptions({ notifyUser }) {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
      {/* Left */}
      <div className="flex space-x-6">
        <HeaderOption
          Icon={SearchIcon}
          title="All"
          selected
          notifyUser={notifyUser}
        />
        <HeaderOption
          Icon={PhotographIcon}
          title="Images"
          notifyUser={notifyUser}
        />
        <HeaderOption Icon={PlayIcon} title="Videos" notifyUser={notifyUser} />
        <HeaderOption
          Icon={NewspaperIcon}
          title="News"
          notifyUser={notifyUser}
        />
        <HeaderOption Icon={MapIcon} title="Maps" notifyUser={notifyUser} />
        <HeaderOption
          Icon={DotsVerticalIcon}
          title="More"
          notifyUser={notifyUser}
        />
      </div>

      {/* Right */}
      <div className="flex space-x-4">
        <p className="link" onClick={notifyUser}>Settings</p>
        <p className="link" onClick={notifyUser}>Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
