"use client";
import { FC, ReactElement, useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import styles from "@/styles/navbar.module.css";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

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
  const [clickedNavbarBars, setClickedNavbarBars] = useState(false);
  const nav = useRef<HTMLElement>(null);

  const toggleDropdown = () => {
    setOpened((prev) => !prev);
  };

  const getDropdownMenuStyle = () => {
    if (opened) return [styles.dropdownMenu, styles.open].join(" ");
    else return styles.dropdownMenu;
  };

  const navbarDropdown = useRef<HTMLDivElement>(null);

  useOnClickOutside(navbarDropdown, () => {
    if (clickedNavbarBars) {
      setClickedNavbarBars(false);
      return;
    }
    if (opened) toggleDropdown();
  });

  const changeNavbarColor = () => {
    if (window.scrollY >= 60) {
      nav.current!.classList.add(styles.sticky); // useRef ile erişin
    } else {
      if (nav.current!.classList.contains(styles.sticky)) {
        nav.current!.classList.remove(styles.sticky); // useRef ile erişin
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <header id={styles.header} ref={nav}>
      <div id={styles.navigationBarContent} className="container">
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
          <div
            className={styles.navbarToggle}
            onClick={() => {
              setClickedNavbarBars(true);
              toggleDropdown();
            }}
          >
            {opened ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        <div ref={navbarDropdown} className={getDropdownMenuStyle()}>
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
      </div>
    </header>
  );
};

export default Navbar;
