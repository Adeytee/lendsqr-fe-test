"use client";

// ** React Imports
import React from "react";
import { useState, useEffect } from "react";
import {
  FaBriefcase,
  FaChevronDown,
  FaHome,
  FaUserFriends,
  FaUsers,
  FaRegHandshake,
  FaPiggyBank,
  FaHandHolding,
  FaUserCheck,
  FaUserTimes,
  FaCoins,
  FaMobileAlt,
  FaModx,
  FaUserCog,
  FaScroll,
  FaRegChartBar,
  FaClipboardList,
  FaSlidersH,
  FaBars
} from "react-icons/fa";
import { FaBuildingColumns, FaPercent, FaXmark } from "react-icons/fa6";
import { TbArrowsLeftRight } from "react-icons/tb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";

// ** Styles Import
import styles from "/public/styles/SideBar.module.scss";

const SideBar = () => {
  const [activeTab, setActiveTab] = useState("");
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    // Set the initial active tab
    setActiveTab("users");
  }, []);

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

//   const closeSidebar = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };

  console.log({isSidebarVisible})

  return (

  <>
    <button className={styles.menuButton} onClick={toggleSidebar}>
            <FaBars />
      </button>

   

      <div className={`${styles.layout} ${isSidebarVisible ? styles.layoutActive : styles.layout}`}>
      {isSidebarVisible && (
        <button className={styles.closeButton} onClick={toggleSidebar}>
        <FaXmark />
  </button>
      )}
      <div className={styles.switchOrganization}>
        <FaBriefcase />
        <p>Switch Organization</p>
        <button className={styles.dropdownButton}>
          <FaChevronDown />
        </button>
      </div>

      <div className={styles.switchOrganization}>
        <FaHome />
        <a href="/dashboard">Dashboard</a>
      </div>
      <p className={styles.sectionHead}>CUSTOMERS</p>

      <div
        className={`${styles.customList} ${
          activeTab === "users" ? styles.active : ""
        }`}
        onClick={() => handleTabClick("users")}
      >
        <FaUserFriends />
        <a href="#">Users</a>
      </div>

      <div
        className={`${styles.customList} ${
          activeTab === "guarantors" ? styles.active : ""
        }`}
        onClick={() => handleTabClick("guarantors")}
      >
        <FaUsers />
        <a href="#">Guarantors</a>
      </div>

      <div className={styles.customList}>
        <FontAwesomeIcon
          className={styles.faSackDollar}
          icon={faSackDollar}
        />
        <p>Loans</p>
      </div>

      <div className={styles.customList}>
        <FaRegHandshake />
        <p>Decision Model</p>
      </div>

      <div className={styles.customList}>
        <FaPiggyBank />
        <p>Savings</p>
      </div>

      <div className={styles.customList}>
        <div className={styles.handHoldingSack}>
          <FontAwesomeIcon className={styles.sackOnHand} icon={faSackDollar} />
          <FaHandHolding className={styles.handHolding} />
        </div>
        <p>Loan Request</p>
      </div>

      <div className={styles.customList}>
        <FaUserCheck />
        <p>Whitelist</p>
      </div>

      <div className={styles.customList}>
        <FaUserTimes />
        <p>Karma</p>
      </div>

      <p className={styles.sectionHead}>BUSINESSES</p>

      <div className={styles.customList}>
        <FaBriefcase />
        <p>Organization</p>
      </div>

      <div className={styles.customList}>
        <div className={styles.handHoldingSack}>
          <FontAwesomeIcon className={styles.sackOnHand} icon={faSackDollar} />
          <FaHandHolding className={styles.handHolding} />
        </div>
        <p>Loan Products</p>
      </div>

      <div className={styles.customList}>
        <FaBuildingColumns />
        <p>Savings Products</p>
      </div>

      <div className={styles.customList}>
        <FaCoins />
        <p>Fees and Charges</p>
      </div>

      <div className={styles.customList}>
        <div className={styles.mobileContainer}>
          <FaMobileAlt className={styles.faMobileAlt} />
          <TbArrowsLeftRight className={styles.tbArrowsLeftRight} />
        </div>
        <p>Transactions</p>
      </div>

      <div className={styles.customList}>
        <FaModx />
        <p>Services</p>
      </div>

      <div className={styles.customList}>
        <FaUserCog />
        <p>Service Account</p>
      </div>

      <div className={styles.customList}>
        <FaScroll />
        <p>Settlements</p>
      </div>

      <div className={styles.customList}>
        <FaRegChartBar />
        <p>Reports</p>
      </div>

      <p className={styles.sectionHead}>SETTINGS</p>

      <div className={styles.customList}>
        <FaSlidersH />
        <p>Preferences</p>
      </div>

      <div className={styles.customList}>
          <FaPercent className={styles.faPercent}/>
        <p>Fees and Pricing</p>
      </div>

      <div className={styles.customList}>
        <FaClipboardList />
        <p>Audit Logs</p>
      </div>
    </div>
  </>
  );
};

export default SideBar;
