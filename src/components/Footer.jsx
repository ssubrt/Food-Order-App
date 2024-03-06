
import React from "react";
import github from "../assets/github.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="relative bg-black text-center text-white py-4">
      <span className="font-bold">Created By Subrat © 2024 CraveBite. All rights reserved.</span>
      <div className="flex justify-center">
        <Link to={"https://github.com/ssubrt"} target="_blank">
          <img src={github} alt="" className="w-12 h-12" title="Github" />
        </Link>
      </div>
    </section>
  );
};

export default Footer;
