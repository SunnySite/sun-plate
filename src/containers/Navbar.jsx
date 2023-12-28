import { useState } from "react";
import { ArrowDown } from "../assets/Icon";

const Navbar = ({ Menus }) => {
  const [lastClick, setLastClick] = useState("");
  const handleClick = (menu) => {
    if (lastClick != "" && menu != lastClick) {
      let prevEle = document.getElementById(lastClick).classList;
      prevEle.add("hidden");
    }
    let ele = document.getElementById(menu).classList;
    if (ele.contains("hidden")) {
      ele.remove("hidden");
    } else {
      ele.add("hidden");
    }
    setLastClick(menu);
  };
  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-16 transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
        aria-hidden="true"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          <ul className="space-y-2 font-medium">
            {Menus.map((menu, index) => {
              return !menu.child ? (
                <li key={`${menu.menu}_${index}`}>
                  <a
                    href={menu.path}
                    className="flex items-center p-2 text-white rounded-lg dark:text-white hover:text-white hover:bg-gray-400 dark:hover:bg-gray-700 group"
                  >
                    {menu.icon}
                    <span className="ms-3">{menu.display}</span>
                  </a>
                </li>
              ) : (
                <li key={`${menu.menu}_${index}`} className="hover:border-none">
                  <button
                    type="button"
                    className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group focus:outline-none hover:border-none border-none hover:bg-gray-400 dark:text-white hover:text-white dark:hover:bg-gray-700"
                    aria-controls={menu.menu}
                    data-collapse-toggle={menu.menu}
                    onClick={() => handleClick(menu.menu)}
                  >
                    {menu.icon}
                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                      {menu.display}
                    </span>
                    <ArrowDown />
                  </button>
                  <ul id={menu.menu} className="hidden py-2 space-y-2">
                    {menu.child?.map((c) => {
                      return (
                        <li key={`${c.menu}_${index}`}>
                          <a
                            href={c.path}
                            className="flex hover:text-white items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-400 dark:text-white dark:hover:bg-gray-700"
                          >
                            {c.display}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
