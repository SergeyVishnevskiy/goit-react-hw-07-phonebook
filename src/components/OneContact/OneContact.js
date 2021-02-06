import React from "react";
import styles from "./OneContact.module.css";
import { useDispatch } from "react-redux";
import { deleteUserOption } from "../../redux/operation/itemsOperation";

const OneContact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const userDeleteHandle = (id) => {
    dispatch(deleteUserOption(id));
  };

  return (
    <li className={styles.listItem}>
      <p className={styles.contactName}>{name}</p>
      <p className={styles.contactNumber}>{number}</p>
      <button
        className={styles.deleteButton}
        onClick={() => userDeleteHandle(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default OneContact;
