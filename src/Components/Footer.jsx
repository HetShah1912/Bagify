import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  console.log(year);

  return (
    <footer className="bg-slate-900 text-slate-400 text-center p-6 border-t border-slate-700 mt-8">
      <p className="text-sm">
        &copy; {year} Het Shah |{" "}
        <span className="text-blue-400 font-semibold">
          E-Commerce Website
        </span>
      </p>
    </footer>
  );
};

export default Footer;