import { useRouter } from "next/dist/client/router"
import requests from "../utils/requests"

const Nav = () => {
  const router = useRouter()
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 space-x-10 sm:space-x-20 whitespace-nowrap overflow-x-scroll text-2xl scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 transition duration-200 transform  hover:scale-125 cursor-pointer hover:text-white active:text-red-500"
            key={key}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 h-8 w-1/12 bg-gradient-to-l from-[#06202A]" />
    </nav>
  )
}

export default Nav
