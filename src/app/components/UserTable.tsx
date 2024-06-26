"use client";

// ** React Imports
import React, { useState } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaEllipsisV,
  FaEye,
  FaUserTimes,
  FaUserCheck,
} from "react-icons/fa";

// ** Next Import
import { useRouter } from "next/navigation";

// ** Style Import
import styles from "/public/styles/UserTable.module.scss";

// ** Icon Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const TableHeader = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [filters, setFilters] = useState({
    organization: "",
    username: "",
    email: "",
    phone: "",
    dateJoined: "",
    status: "",
  });

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const onFilterChange = (key: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  const headers = [
    { key: "organization", label: "ORGANIZATION" },
    { key: "username", label: "USERNAME" },
    { key: "email", label: "EMAIL" },
    { key: "phone", label: "PHONE NUMBER" },
    { key: "dateJoined", label: "DATE JOINED" },
    { key: "status", label: "STATUS" },
    { key: "action", label: "Action" },
  ];

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        {headers.map(({ key, label }) => (
          <div key={key} className={styles.headerItem}>
            <div className={styles.headerContent}>
              {label}
              <FontAwesomeIcon icon={faFilter} onClick={toggleDropdown} />
            </div>
          </div>
        ))}
      </div>
      {dropdownVisible && (
        <div className={styles.filterContainer}>
          <div className={styles.filterDropdown}>
            {headers.map(({ key, label }) => (
              <div key={key} className={styles.filterItem}>
                <label>{label}</label>
                <input
                  type="text"
                  //@ts-ignore
                  value={filters[key]}
                  onChange={(e) => onFilterChange(key, e.target.value)}
                  placeholder={`Filter by ${label.toLowerCase()}`}
                />
              </div>
            ))}
            <div className={styles.filterButtons}>
              <button className={styles.resetButton}>Reset</button>
              <button className={styles.filterButton}>Filter</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const TableBody = ({ data }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [pageRange, setPageRange] = useState([1, Math.min(5, totalPages)]);
  const router = useRouter();

  const handleClick = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      if (nextPage > pageRange[1]) {
        setPageRange([nextPage - 4, nextPage]);
      }
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      if (prevPage < pageRange[0]) {
        setPageRange([prevPage, prevPage + 4]);
      }
    }
  };

  const handleItemsPerPageChange = (event: any) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
    setPageRange([
      1,
      Math.min(5, Math.ceil(data.length / Number(event.target.value))),
    ]);
  };

  const getStatusClass = (item: any) => {
    if (item.isActive) return styles.activeStatus;
    if (item.isBlacklisted) return styles.blacklistedStatus;
    if (item.isPending) return styles.pendingStatus;
    return styles.inactiveStatus;
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const viewDetails = (item: any) => {
    router.push(`/userDetails/${item.id}`);
  };

  return (
    // Table Body Section
    <div className={styles.tableBody}>
      {paginatedData.map((item: any, index: any) => (
        <div key={index} className={styles.tableRow}>
          <div className={styles.tableCell}>{item.company}</div>
          <div className={styles.tableCell}>{item.name}</div>
          <div className={styles.tableCell}>{item.email}</div>
          <div className={styles.tableCell}>{item.phone}</div>
          <div className={styles.tableCell}>{item.registered}</div>
          <div className={styles.tableCell}>
            <span className={`${styles.statusText} ${getStatusClass(item)}`}>
              {item.isActive
                ? "Active"
                : item.isBlacklisted
                ? "Blacklisted"
                : item.isPending
                ? "Pending"
                : "Inactive"}
            </span>
          </div>
          <div className={styles.tableCell}>
            <div className={styles.actionDropdownContainer}>
              <FaEllipsisV />
              <div className={styles.actionDropdownContent}>
                <div
                  className={styles.actionDropdownItem}
                  onClick={() => viewDetails(item)}
                >
                  <FaEye className={styles.actionDropdownItemIcon} /> View
                  Details
                </div>
                <div className={styles.actionDropdownItem}>
                  <FaUserTimes className={styles.actionDropdownItemIcon} />{" "}
                  Blacklist User
                </div>
                <div className={styles.actionDropdownItem}>
                  <FaUserCheck className={styles.actionDropdownItemIcon} />{" "}
                  Activate User
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination Section */}
      <div className={styles.paginationContainer}>
        <div className={styles.showingState}>
          <span>Showing </span>
          <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span> out of {data.length}</span>
        </div>

        <div className={styles.pagination}>
          <button onClick={handlePrevious} disabled={currentPage === 1}>
            <FaAngleLeft />
          </button>
          {Array.from({ length: Math.min(5, totalPages) }, (_, index) => {
            const pageNumber = pageRange[0] + index;
            return (
              pageNumber <= totalPages && (
                <button
                  key={pageNumber}
                  className={currentPage === pageNumber ? styles.active : ""}
                  onClick={() => handleClick(pageNumber)}
                >
                  {pageNumber}
                </button>
              )
            );
          })}
          <button onClick={handleNext} disabled={currentPage === totalPages}>
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

const UserTable = ({ data }: any) => {
  return (
    <div className={styles.tableContainer}>
      <TableHeader />
      <TableBody data={data} />
    </div>
  );
};

export default UserTable;
