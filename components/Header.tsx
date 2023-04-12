import React from "react"

import Link from "next/link"
import { useRouter } from "next/router"

import classNames from "utils/classNames"

const Header: React.FC = () => {
  const router = useRouter()

  const linkClass = "rounded-md px-3 py-1.5 transition-colors"
  const activeClass = "bg-gray-200 hover:bg-gray-300"
  const notActiveClass = "hover:bg-gray-100"

  return (
    <header className="flex w-full items-center justify-center p-2 text-sm">
      <div className="mr-auto font-medium">Animated SVG Gallery</div>
      <div className="flex gap-1">
        <Link
          className={classNames(
            linkClass,
            router.pathname === "/" ? activeClass : notActiveClass
          )}
          href="/"
        >
          Features
        </Link>
        <Link
          className={classNames(
            linkClass,
            router.pathname === "/details" ? activeClass : notActiveClass
          )}
          href="/details/"
        >
          Details
        </Link>
        <Link
          className={classNames(
            linkClass,
            router.pathname === "/others" ? activeClass : notActiveClass
          )}
          href="/others/"
        >
          Others
        </Link>
      </div>
      <div className="ml-auto">
        <a href="https://github.com/nirnejak/svg-animations" target="_blank">
          View Source
        </a>
      </div>
    </header>
  )
}

export default Header
