import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { path: "/", name: "Home", id: "1" },
    { path: "/about", name: "About", id: "2" },
    { path: "/contact", name: "Contact", id: "3" },
    { path: "/products", name: "Products", id: "4" },
    { path: "/products/:id", name: "Product Detail", id: "5" },
  ];

  return (
    <nav className="text-white p-5 bg-slate-400">
      <div
        className="text-2xl text-white  md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open === true ? (
          <AiFillCloseCircle></AiFillCloseCircle>
        ) : (
          <AiOutlineMenu></AiOutlineMenu>
        )}
      </div>
      <ul
        className={`md:flex duration-300 absolute md:static
         ${open ? "top-14" : "-top-60"}
         bg-slate-400 p-5 rounded-b-lg
         `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
