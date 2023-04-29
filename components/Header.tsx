import React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"

import classNames from "utils/classNames"

const links = [
  { label: "Features", path: "/" },
  { label: "Details", path: "/details" },
  { label: "Others", path: "/others" },
]

const Header: React.FC = () => {
  const router = useRouter()

  return (
    <motion.header
      initial={{ translateY: "-100%" }}
      animate={{ translateY: 0 }}
      transition={{ delay: 2 }}
      className="grid w-full grid-cols-3 items-center bg-white p-2 text-sm text-gray-700"
    >
      <div className="mr-auto text-base font-bold">SVG Gallery</div>
      <div className="flex justify-center">
        <div className="toggle-group flex gap-1 rounded-md bg-gray-200 p-1">
          {links.map((link, index) => (
            <Link
              key={index}
              className={classNames(
                "rounded px-3 py-1.5 font-semibold transition-colors hover:bg-gray-100",
                router.pathname === link.path && "bg-white shadow-sm"
              )}
              href={link.path}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="ml-auto">
        <a
          href="https://github.com/nirnejak/svg-animations"
          target="_blank"
          className="flex items-center gap-1 rounded-md px-3 py-1.5 font-medium hover:bg-gray-200"
        >
          <span>View Source</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="currentColor"
              strokeWidth="2"
            >
              <path d="M8.422 20.081c0 .896.01 1.753.016 2.285a.617.617 0 0 0 .422.58c2.078.686 4.317.718 6.414.091l.292-.087a.67.67 0 0 0 .478-.638c.005-.733.017-2.017.017-3.53 0-1.372-.477-2.25-1.031-2.707 3.399-.366 6.97-1.61 6.97-7.227 0-1.61-.592-2.91-1.566-3.934.153-.366.688-1.866-.153-3.878 0 0-1.28-.403-4.201 1.5a14.76 14.76 0 0 0-3.82-.494c-1.298 0-2.597.165-3.819.494C5.52.65 4.24 1.036 4.24 1.036c-.84 2.012-.306 3.512-.153 3.878a5.565 5.565 0 0 0-1.566 3.934c0 5.598 3.552 6.86 6.951 7.227-.439.366-.84 1.006-.973 1.957-.879.384-3.075 1.006-4.45-1.207-.286-.44-1.146-1.519-2.349-1.5-1.28.018-.516.695.02.97.648.347 1.393 1.646 1.565 2.067.306.823 1.299 2.396 5.137 1.72z" />
            </svg>
          </span>
        </a>
      </div>
    </motion.header>
  )
}

export default Header
