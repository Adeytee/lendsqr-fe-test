"use client";

// ** React Imports
import React, { useState } from "react";

//  ** Styles Imports
import styles from "/public/styles/UserProfileCard.module.scss";

//  ** Third Party Imports
import { User } from "../types";

interface UserProfileCardProps {
  user: User;
  generalDetails: React.ReactNode;
  documents: React.ReactNode;
  bankDetails: React.ReactNode;
  loans: React.ReactNode;
  savings: React.ReactNode;
  appAndSystem: React.ReactNode;
}

const RatingStars = ({ ratingCount }: any) => {
  // Calculate the number of filled stars
  const filledStars = Array.from({ length: 5 }, (_, index) => {
    if (index < ratingCount) {
      return (
        <span key={index} className={styles.star}>
          &#9733;
        </span>
      ); // Filled star
    } else {
      return (
        <span key={index} className={styles.star}>
          &#9734;
        </span>
      ); // Empty star
    }
  });

  return <div className={styles.rating}>{filledStars}</div>;
};

const PersonalInformation = ({ userData }: any) => {
  return (
    <div className={styles.personalInformationContainer}>
      <h4 className={styles.sectionHeads}>Personal Information</h4>
      <div className={styles.groupContainer}>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>FULL NAME</p>
          <p className={styles.informationProp}>{userData?.name}</p>
        </div>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>PHONE NUMBER</p>
          <p className={styles.informationProp}>{userData?.phone}</p>
        </div>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>EMAIL ADDRESS</p>
          <p className={styles.informationProp}>{userData?.email}</p>
        </div>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>BVN</p>
          <p className={styles.informationProp}>{userData?.bvn}</p>
        </div>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>GENDER</p>
          <p className={styles.informationProp}>{userData?.gender}</p>
        </div>
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>MARITAL STATUS</p>
          <p className={styles.informationProp}>{userData?.maritalStatus}</p>
        </div>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>CHILDREN</p>
          <p className={styles.informationProp}>{userData?.children}</p>
        </div>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>TYPE OF RESIDENCE</p>
          <p className={styles.informationProp}>{userData?.tags[1]}</p>
        </div>
      </div>

      <h4 className={styles.sectionHeads}>Education and Employment</h4>
      <div className={styles.groupContainer}>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>LEVEL OOF EDUCATION</p>
          <p className={styles.informationProp}>{userData?.levelOfEducation}</p>
        </div>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>EMPLOYMENT STATUS</p>
          <p className={styles.informationProp}>{userData?.employmentStatus}</p>
        </div>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>SECTOR OF EMPLOYMENT</p>
          <p className={styles.informationProp}>
            {userData?.sectorOfEmployment}
          </p>
        </div>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>DURATION OF EMPLOYMENT</p>
          <p className={styles.informationProp}>
            {userData?.durationOfEmployment}
          </p>
        </div>
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>OFFICE EMAIL</p>
          <p className={styles.informationProp}>{userData?.officeEmail}</p>
        </div>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>MONTHLY INCOME</p>
          <p className={styles.informationProp}>{userData?.loanRepayment}</p>
        </div>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>LOAN REPAYMENT</p>
          <p className={styles.informationProp}>{userData?.salary}</p>
        </div>
      </div>

      <h4 className={styles.sectionHeads}>Socials</h4>
      <div className={styles.groupContainer}>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>TWITTER</p>
          <p className={styles.informationProp}>@{userData?.tags[4]}</p>
        </div>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>FACEBOOK</p>
          <p className={styles.informationProp}>{userData?.name}</p>
        </div>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>INSTAGRAM</p>
          <p className={styles.informationProp}>@{userData?.tags[4]}</p>
        </div>
      </div>

      <h4 className={styles.sectionHeads}>Guarantor</h4>
      <div className={styles.groupContainer}>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>FULL NAME</p>
          <p className={styles.informationProp}>{userData?.guarantorName}</p>
        </div>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>PHONE NUMBER</p>
          <p className={styles.informationProp}>
            {userData?.guarantorPhoneNumber}
          </p>
        </div>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>EMAIL ADDRESS</p>
          <p className={styles.informationProp}>{userData?.email}</p>
        </div>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>RELATIONSHIP</p>
          <p className={styles.informationProp}>
            {userData?.guarantorRelationship}
          </p>
        </div>
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>FULL NAME</p>
          <p className={styles.informationProp}>{userData?.friends[1].name}</p>
        </div>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>PHONE NUMBER</p>
          <p className={styles.informationProp}>
            {userData?.guarantorPhoneNumber}
          </p>
        </div>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>EMAIL ADDRESS</p>
          <p className={styles.informationProp}>{userData?.email}</p>
        </div>
        <div className={styles.groups}>
          {" "}
          <p className={styles.informationData}>RELATIONSHIP</p>
          <p className={styles.informationProp}>
            {userData?.guarantorRelationship}
          </p>
        </div>
      </div>
    </div>
  );
};

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  generalDetails,
  documents,
  bankDetails,
  loans,
  savings,
  appAndSystem,
}) => {
  const [activeTab, setActiveTab] = useState<string>("general");

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case "general":
        return generalDetails;
      case "documents":
        return documents;
      case "bank":
        return bankDetails;
      case "loans":
        return loans;
      case "savings":
        return savings;
      case "appAndSystem":
        return appAndSystem;
      default:
        return generalDetails;
    }
  };

  return (
    <div className={styles.userProfileContainer}>
      <div className={styles.profileCard}>
        <div className={styles.profileHead}>
          <img
            src={user.picture}
            alt={`${user.name}'s profile`}
            className={styles.profilePicture}
          />
          <div className={styles.grouped}>
            {" "}
            <h2 className={styles.userName}>{user.name}</h2>
            <p className={styles.userId}>ID: {user.id}</p>
          </div>
          <div className={styles.grouped}>
            <p className={styles.userName}>User&apos;s Tier</p>
            <RatingStars ratingCount={user.rating} />
          </div>
          <div className={styles.grouped}>
            <h1 className={styles.userName}>#{user.loanRepayment}</h1>
            <p className={styles.userId}>{user.bvn}</p>
          </div>
        </div>
        <div className={styles.tabs}>
          <button
            className={activeTab === "general" ? styles.activeTab : ""}
            onClick={() => setActiveTab("general")}
          >
            General Details
          </button>
          <button
            className={activeTab === "documents" ? styles.activeTab : ""}
            onClick={() => setActiveTab("documents")}
          >
            Documents
          </button>
          <button
            className={activeTab === "bank" ? styles.activeTab : ""}
            onClick={() => setActiveTab("bank")}
          >
            Bank Details
          </button>
          <button
            className={activeTab === "loans" ? styles.activeTab : ""}
            onClick={() => setActiveTab("loans")}
          >
            Loans
          </button>
          <button
            className={activeTab === "savings" ? styles.activeTab : ""}
            onClick={() => setActiveTab("savings")}
          >
            Savings
          </button>
          <button
            className={activeTab === "appAndSystem" ? styles.activeTab : ""}
            onClick={() => setActiveTab("appAndSystem")}
          >
            Apps and System
          </button>
        </div>
        <div className={styles.detailsCard}>
          {renderActiveTabContent()}
          <PersonalInformation userData={user} />
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
