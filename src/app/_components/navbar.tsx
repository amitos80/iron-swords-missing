import Link from "next/link"

import { cn } from "@/lib/utils"

export function NavBar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    //flex items-center space-x-4 lg:space-x-6
  <nav
    className={cn(" relative flex w-full  bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-end lg:pb-4 lg:py-4", className)} {...props}>


      <ul
        className="list-style-none flex flex-col lg:flex-row items-right right"
        data-te-navbar-nav-ref>

        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          <a
            className="text-white rounded px-6 py-2.5 bg-[#3EB891] text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            href="/"
            data-te-nav-link-ref
          > דווח על נעדר</a
          >
        </li>


        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          <a
            className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            href="/qa"
            data-te-nav-link-ref
          >שאלות ותשובות</a
          >
        </li>



        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>

          <a
            className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
            href="/report-form-page"
            data-te-nav-link-ref
          >בית</a
          >
        </li>
      </ul>

  </nav>
  )
}
