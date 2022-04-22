import React, { useCallback, useEffect, useState } from "react";
import { IUser } from "@/interfaces/IUser";
import Button from "@/components/Button";
import styles from "./Table.module.css";
import debounce from "lodash.debounce";
type ITableProps = {
  data: IUser[];
};

interface MyEvent<T extends EventTarget> extends Omit<Event, "target"> {
  target: T;
}

const Table = ({ data }: ITableProps) => {
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [checkedInput, setCheckedInput] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState<IUser[]>(data);

  const handleSelectAll = (e) => {
    setIsAllChecked(!isAllChecked);
    setCheckedInput(data?.map((item) => item?.id));
    if (isAllChecked) {
      setCheckedInput([]);
    }
  };
  const handleClick = (e: MyEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setCheckedInput([...checkedInput, id]);
    if (!checked) {
      setCheckedInput(checkedInput.filter((item) => item !== id));
    }
    if (checkedInput.length === 10) {
      setIsAllChecked(true);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filterUsers = useCallback(
    debounce(
      (query: string) =>
        setUsers(
          data.filter(
            (user: IUser) =>
              user.username.toLowerCase().includes(query?.toLowerCase()) ||
              user.id.includes(query) ||
              user.email.toLowerCase().includes(query.toLowerCase()) ||
              user.name.toLowerCase().includes(query.toLowerCase()) ||
              user.phone.includes(query) ||
              user.address.street.toLowerCase().includes(query.toLowerCase()) ||
              user.website.toLowerCase().includes(query.toLowerCase())
          )
        ),
      500
    ),
    []
  );
  const handleSearch = (e: MyEvent<HTMLInputElement>) => {
    filterUsers(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div className={styles.top}>
        <h2>Users</h2>
        <div className={styles.top_right}>
          <div className={styles.input_wrapper}>
            <input
              type="text"
              placeholder="Search here"
              onChange={handleSearch}
            />
          </div>
          <Button icon="+" onClick={() => console.log("clicked")}>
            Add User
          </Button>
        </div>
      </div>

      <div className={styles.table_header}>
        <div className={styles.col}>
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={isAllChecked}
          />
        </div>

        <div className={styles.col}>Id</div>
        <div className={styles.col}>Name</div>
        <div className={styles.col}>Username</div>
        <div className={styles.col}>Email</div>
        <div className={styles.col}>Phone</div>
        <div className={styles.col}>Address</div>
        <div className={styles.col}>Website</div>
      </div>
      {users?.map((user) => (
        <div className={styles.table_body} key={user?.id}>
          <div className={styles.col}>
            <input
              type="checkbox"
              name={user?.username}
              id={user.id}
              onChange={handleClick}
              checked={checkedInput.includes(user.id)}
            />
          </div>
          <div className={styles.col}>{user?.id}</div>
          <div className={styles.col}>{user?.name}</div>
          <div className={styles.col}>{user?.username}</div>

          <div className={styles.col}>{user?.email}</div>
          <div className={styles.col}>{user?.phone}</div>
          <div className={styles.col}>{user?.address?.street}</div>

          <div className={styles.col}>{user?.website}</div>
        </div>
      ))}
    </div>
  );
};

export default Table;
