"use client";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import * as Avatar from "@radix-ui/react-avatar";
import MenuMobile from "../menuMobile/MenuMobile";
import { BsDownload } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header flex p-2 px-4 justify-between items-center rounded-md w-full fixed">
      <div className="flex hover:bg-[rgba(255,255,255,0.1)] ease-in-out duration-300 px-2 py-[2px] rounded-md h-fit">
        <p className="text-white font-semibold text-xl align-middle flex items-center font-titillium">
          <span className="text-red-500 font-bold mr-1">{"<"}</span> phd{" "}
          <span className="text-red-500 font-bold ml-1">{"/>"}</span>
        </p>
      </div>
      <div className="flex w-fit md:hidden">
        <MenuMobile />
      </div>
      <div className="gap-4 p-2 py-1 hidden md:flex">
        <a
          href="https://twitter.com/pedrophd_"
          target='_blank'
          className="flex hover:bg-[rgba(255,255,255,0.2)] ease-in-out duration-300 p-2 rounded-md"
        >
          <FaTwitter
            color="white"
            size={24}
            className="hover:fill-red-500 ease-in-out duration-300"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/pedro-dominici/"
          target='_blank'
          className="flex hover:bg-[rgba(255,255,255,0.2)] ease-in-out duration-300  p-2 rounded-md"
        >
          <FaLinkedinIn
            color="white"
            size={24}
            className="hover:fill-red-500 ease-in-out duration-300"
          />
        </a>
        <a
          href="https://github.com/pedro-phd"
          target='_blank'
          className="flex hover:bg-[rgba(255,255,255,0.2)] ease-in-out duration-300  p-2 rounded-md"
        >
          <FaGithub
            color="white"
            size={24}
            className="hover:fill-red-500 ease-in-out duration-300"
          />
        </a>
        <div className="pl-4 border-l-2 border-red-500">
          <a href='https://drive.google.com/file/d/1YlgWCsov8x07-curbeYsnp5uVZnBveo9/view' target='_blank' className="font-bold font-titillium text-red-500 bg-[rgba(255,68,68,0.1)] rounded-lg h-10 inline-flex items-center p-4 gap-2 cursor-pointer group border-2 border-[rgba(255,68,68,0.1)] hover:border-[rgba(255,68,68,0.5)] transition-all delay-150 ease-in-out hover:animation-pulse">
            <BsDownload className="text-red-500 group-hover:text-red-400 group-hover:animate-pulse transition-all ease-in-out delay-75" />
            <span className="text-red-500 group-hover:text-red-400 group-hover:animate-pulse transition-all ease-in-out delay-75">Download CV</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
