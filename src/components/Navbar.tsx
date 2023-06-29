"use client";
import { FC, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import styles from "@/styles/navbar.module.css";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Projects",
    url: "/projects",
  },

  {
    id: 3,
    title: "Courses",
    url: "/courses",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar: FC = () => {
  const [opened, setOpened] = useState(false);

  const toggleDropdown = () => {
    setOpened((prev) => !prev);
  };

  const getDropdownMenuStyle = () => {
    if (opened) return [styles.dropdownMenu, styles.open].join(" ");
    else return styles.dropdownMenu;
  };

  return (
    <header id={styles.header} className="container">
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="#">.DEV</Link>
        </div>
        <div className={styles.nav}>
          <DarkModeToggle />
          <div className={styles.links}>
            {links.map((link) => (
              <Link key={link.id} href={link.url} className={styles.links}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.navbarToggle} onClick={() => toggleDropdown()}>
          {opened ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <div className={getDropdownMenuStyle()}>
        <div className={styles.links}>
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={() => toggleDropdown()}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
