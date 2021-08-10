import HeaderIcon from "./HeaderIcon"
import Image from "next/image"
import {
  BadgeCheckIcon,
  HomeIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline"

const HeaderIcons = [
  {
    Icon: HomeIcon,
    title: "HOME",
  },
  {
    Icon: LightningBoltIcon,
    title: "TRENDING",
  },
  {
    Icon: BadgeCheckIcon,
    title: "VERIFIED",
  },
  {
    Icon: CollectionIcon,
    title: "COLLECTIONS",
  },
  {
    Icon: SearchIcon,
    title: "SEARCH",
  },
  {
    Icon: UserIcon,
    title: "ACCOUNT",
  },
]

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow max-w-2xl justify-evenly">
        {HeaderIcons.map((item) => (
          <HeaderIcon title={item.title} key={item.title} Icon={item.Icon} />
        ))}
      </div>
      <div className="text-bold text-4xl text-white whitespace-nowrap">
        HD Videos
      </div>
    </header>
  )
}

export default Header
