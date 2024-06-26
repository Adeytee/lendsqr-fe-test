"use client";

// ** React Imports
import React, { useEffect, useState } from "react";

//  ** Third Party Imports
import { fetchUsers } from "../utils/api";
import { User } from "../types";
import "../globals.css";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import UserCard from "../components/UserCard";
import UserTable from "../components/UserTable";

// ** Styles Import
import styles from "/public/styles/DashBoard.module.scss";

// ** Icon Imports
import { FaUserFriends, FaUsers, FaCoins, FaFileAlt } from "react-icons/fa";

const Dashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const activeUsers = users.filter((user) => user.isActive).length;
  const usersCount = users.length;
  const usersWithLoan = users.filter((user) => user.withLoan).length;
  const usersWithSavings = users.filter((user) => user.withSavings).length;

  // useEffect to listen to HTTP Request
  useEffect(() => {
    const getUsers = async () => {
      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch users");
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Render Third Party Components
  return (
    <div className={styles.dashboardContainer}>
      <Navbar />
      <div className={styles.mainContent}>
        <SideBar />
        <div className={styles.content}>
          <div className={styles.cardsLayout}>
            <h1>Users</h1>
            <UserCard
              users="USERS"
              Icon={FaUserFriends}
              userCount={usersCount}
              color="#DF18FF"
            />
            <UserCard
              users="ACTIVE USERS"
              Icon={FaUsers}
              userCount={activeUsers}
              color="#5718FF"
            />
            <UserCard
              users="USERS WITH LOANS"
              Icon={FaFileAlt}
              userCount={usersWithLoan}
              color="#F55F44"
            />
            <UserCard
              users="USERS WITH SAVINGS"
              Icon={FaCoins}
              userCount={usersWithSavings}
              color="#FF3366"
            />
          </div>
          <div>
            <UserTable data={users} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
