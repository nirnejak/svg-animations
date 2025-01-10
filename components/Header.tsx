"use client"
import React from "react"

import { GithubFill, LinkOut, XFill } from "akar-icons"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

import classNames from "utils/classNames"

const links = [
  { label: "Features", path: "/" },
  { label: "Details", path: "/details/" },
  { label: "Others", path: "/others/" },
]

const Header: React.FC = () => {
  const pathname = usePathname()

  return (
    <section className="px-3 pt-3">
      <motion.header
        initial={{ translateY: "-100%" }}
        animate={{ translateY: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          mass: 1,
        }}
        className="shadow-card grid w-full grid-cols-3 items-center justify-start gap-3 rounded-xl bg-zinc-50 px-4 py-2 text-sm text-zinc-700 md:justify-between md:gap-0"
      >
        <div className="mr-auto text-base font-bold">SVG Gallery</div>
        <div className="order-3 col-span-3 flex justify-center md:order-2 md:col-span-1">
          <div className="toggle-group flex gap-1 rounded-3xl bg-gray-200 p-1">
            {links.map((link, index) => (
              <Link
                key={index}
                className={classNames(
                  "rounded-3xl px-3 py-1.5 font-semibold transition-all hover:text-gray-900",
                  pathname === link.path
                    ? "toggle-selected-item bg-white text-gray-900"
                    : "text-gray-500"
                )}
                href={link.path}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="order-2 col-span-2 ml-auto flex gap-0.5 md:order-3 md:col-span-1">
          <a
            href="https://nirnejak.com/"
            target="_blank"
            className="flex items-center gap-1 rounded-3xl px-2 py-1.5 font-medium hover:bg-gray-200"
          >
            <LinkOut size={19} />
          </a>
          <a
            href="https://x.com/jeetnirnejak"
            target="_blank"
            className="flex items-center gap-1 rounded-3xl px-2 py-1.5 font-medium hover:bg-gray-200"
          >
            <XFill size={19} />
          </a>
          <a
            href="https://github.com/nirnejak/svg-animations"
            target="_blank"
            className="flex items-center gap-1 rounded-3xl px-2 py-1.5 font-medium hover:bg-gray-200"
          >
            <GithubFill size={19} />
          </a>
        </div>
      </motion.header>
    </section>
  )
}

export default Header
