"use client";

// ** React Imports
import React, { useEffect, useState } from "react";

// ** Next Imports
import { useParams, useRouter } from "next/navigation";

// ** Third Party Imports
import { fetchUserDetails } from "../../utils/api";
import { User } from "../../types";
import Navbar from "@/app/components/Navbar";
import SideBar from "@/app/components/SideBar";
import UserProfileCard from "@/app/components/UserProfileCards";

// ** Styles Imports
import styles from "/public/styles/UserDetails.module.scss";

// ** Icon Imports
import { FaArrowLeft } from "react-icons/fa";

const UserDetails = () => {
  const params = useParams();
  const userId = params.userId;
  const router = useRouter();

  const [userDetails, setUserDetails] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // HTTP Request Listener
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        if (userId) {
          const fetchedUser = await fetchUserDetails(userId as string);
          setUserDetails(fetchedUser);
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch user details");
        setLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const goBack = () => {
    router.back();
  };

  return (
    <div className={styles.userDetailsContainer}>
      <Navbar />
      <div className={styles.mainContent}>
        <SideBar />
        <div className={styles.contentWrapper}>
          <div className={styles.backButton} onClick={goBack}>
            <FaArrowLeft /> Back to Users
          </div>
          <div className={styles.header}>
            <h1>User Details</h1>
            <div className={styles.buttons}>
              <button className={styles.blacklistButton}>BLACKLIST USER</button>
              <button className={styles.activateButton}>ACTIVATE USER</button>
            </div>
          </div>
          <div className={styles.content}>
            {userDetails && (
              <UserProfileCard
                user={userDetails}
                generalDetails={""}
                documents={""}
                bankDetails={""}
                loans={""}
                savings={""}
                appAndSystem={""}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
