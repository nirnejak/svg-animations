"use client"
import React from "react"

import { motion } from "motion/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import classNames from "@/utils/classNames"
import useLinkHighlight from "@/hooks/useLinkHighlight"

const links = [
  { label: "Features", path: "/" },
  { label: "Details", path: "/details/" },
  { label: "Others", path: "/others/" },
]

const Header: React.FC = () => {
  const pathname = usePathname()

  const [activeTab, setActiveTab] = React.useState(0)
  const { wrapperRef, highlightStyles } = useLinkHighlight(activeTab)

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
          <div
            className="toggle-group relative flex gap-1 rounded-3xl bg-gray-200 p-1"
            ref={wrapperRef}
          >
            <div
              style={{ ...highlightStyles, height: 32 }}
              className="absolute left-0 rounded-3xl transition-all duration-300 bg-white toggle-selected-item"
            />
            {links.map((link, index) => (
              <Link
                key={index}
                className={classNames(
                  "relative rounded-3xl px-3 py-1.5 font-semibold transition-all hover:text-gray-900",
                  pathname === link.path ? "text-gray-900" : "text-gray-500"
                )}
                href={link.path}
                onClick={() => setActiveTab(index)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="order-2 col-span-2 ml-auto flex gap-0.5 md:order-3 md:col-span-1">
          by{" "}
          <a
            className="font-bold underline"
            target="_blank"
            href="https://nirnejak.com/"
          >
            Jitendra Nirnejak
          </a>
        </div>
      </motion.header>
    </section>
  )
}

export default Header
