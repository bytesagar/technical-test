import React, { useCallback, useEffect, useState } from 'react';
import { IUser } from '@/interfaces/IUser';
import Button from '@/components/Button';
import styles from './Table.module.css';
import debounce from 'lodash.debounce';

import Checkbox from '@/components/Checkbox';
import Search from '@/components/Search';

interface ITableProps {
  data: IUser[] | any;
}

const Table = ({ data }: ITableProps) => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    setUsers(data?.sort((a: IUser, b: IUser) => (a?.username.toLowerCase() > b?.username.toLowerCase() ? 1 : -1)));
  }, [data]);

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target;
    if (name === 'selectAll') {
      const tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      const tempUser = users?.map((user) => (user.username === name ? { ...user, isChecked: checked } : user));
      setUsers(tempUser);
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
      400
    ),
    []
  );
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterUsers(e.target.value);
  };

  return (
    <div className={styles.table}>
      <div className={styles.top}>
        <h2>Users</h2>
        <div className={styles.top_right}>
          <Search onChange={handleSearch} />
          <Button icon="+" onClick={() => console.log('clicked')}>
            Add User
          </Button>
        </div>
      </div>

      <div className={styles.table_header}>
        <div className={styles.col}>
          <Checkbox
            name="selectAll"
            onChange={handleClick}
            checked={users?.length > 0 && !users?.some((user) => user?.isChecked !== true)}
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
            <Checkbox name={user?.username} onChange={handleClick} checked={user?.isChecked || false} />
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
