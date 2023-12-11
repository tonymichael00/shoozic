"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleLogout = () => {
    //handle logout in future
  };
  return (
    <div
      className={twMerge(
        `
        h-fit bg-gradient-to-b from-emerald-800 p-6
        `,
        className,
      )}
    >
      <div className="mb-4 flex w-full items-center justify-between">
        <div className="hidden items-center gap-x-2 md:flex">
          <button
            className="flex items-center justify-center rounded-full 
          bg-black transition hover:opacity-75"
            onClick={() => router.back()}
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            className="flex items-center justify-center rounded-full 
          bg-black transition hover:opacity-75"
          >
            <RxCaretRight
              className="text-white"
              onClick={() => router.back()}
              size={35}
            />
          </button>
        </div>
        <div className="flex items-center gap-x-2 md:hidden">
          <button
            className="flex items-center justify-center rounded-full 
          bg-white p-2 transition hover:opacity-75"
          >
            <HiHome className="text-black" size={20} />
          </button>
          <button
            className="flex items-center justify-center rounded-full 
          bg-white p-2 transition hover:opacity-75"
          >
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <>
            <div>{/* <Button /> */}</div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Header;
