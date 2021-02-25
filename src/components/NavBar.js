import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  return (
    <header className="bg-red-600 p-4">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
            to="/"
            exact
          >
            Zakiul
          </NavLink>
          <NavLink
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            to="/post"
          >
            Blog Post
          </NavLink>
          <NavLink
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            to="/project"
          >
            Projects
          </NavLink>
          <NavLink
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            to="/about"
          >
            About me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com/zekiul"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCnBedfIrNGnEFWeoVHYIadA"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
          />
          <SocialIcon
            url="https://www.facebook.com/eeki.py"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
