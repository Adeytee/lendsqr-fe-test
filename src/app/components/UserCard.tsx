import React from "react";
import { FaUser } from 'react-icons/fa';

// ** Styles Import
import styles from "/public/styles/UserCard.module.scss";

interface Props {
  Icon: React.ElementType;
  users: any;
  userCount?: any;
  color: any
}

const UserCard: React.FC<Props> = ({ Icon, users, userCount, color }) => {
  return (
      <div className={styles.card}>
        <div className={styles.iconContainer}>
          <Icon className={styles.icon} style={{ color: color }} />
        </div>
        <div className={styles.info}>
          <h2 className={styles.name}>{users}</h2>
          <p className={styles.number}>{userCount}</p>
        </div>
      </div>
  );
};

export default UserCard;
