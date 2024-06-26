// ** React Imports
import React from "react";
import { FaRegBell, FaUserCircle, FaSearch } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa6";

// ** Next Imports
import Image from "next/image";
import Link from "next/link";

// ** Styles Import
import styles from "/public/styles/Navbar.module.scss";

// ** Third party Imports
import lend from "/public/images/lend.jpeg";
import union from "/public/images/union.jpeg";

const Navbar = (user: any) => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.leftSection}>
        <Image src={union} alt="Union logo" className={styles.union} />
        <Image src={lend} alt="Lend logo" className={styles.lend} />
      </div>

      <div className={styles.middleSection}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for anything..."
            className={styles.searchBox}
          />
          <button className={styles.searchButton}>
            <FaSistrix />
          </button>
        </div>
      </div>

      <div className={styles.rightSection}>
        <Link href="/" className={styles.navLink}>
          Docs
        </Link>
        <FaRegBell className={styles.notificationIcon} />
        {user?.picture ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={user?.picture}
            alt="Profile Avatar"
            className={styles.avatar}
          />
        ) : (
          <FaUserCircle className={styles.notificationIcon} />
        )}
        <span className={styles.profileName}>John Doe</span>
      </div>
    </div>
  );
};

export default Navbar;
