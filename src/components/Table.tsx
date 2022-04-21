import { FC, useEffect, useState, useCallback } from "react";
import { IUser } from "interfaces/IUser";
import Button from "./Button";

type ITableProps = {
  data: IUser[];
};

const Table: FC = ({ data }: ITableProps) => {
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [checkedInput, setCheckedInput] = useState([]);
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState(data);

  const handleSelectAll = (e) => {
    setIsAllChecked(!isAllChecked);
    setCheckedInput(data?.map((item) => item?.id));
    if (isAllChecked) {
      setCheckedInput([]);
    }
  };
  const handleClick = (e) => {
    const { id, checked } = e.target;
    setCheckedInput([...checkedInput, id]);
    if (!checked) {
      setCheckedInput(checkedInput.filter((item) => item !== id));
    }
    if (checkedInput.length === 10) {
      setIsAllChecked(true);
    }
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query !== "") {
      const filteredusers = users.filter((card) => {
        return card.username.toLowerCase().includes(query.toLowerCase());
      });
      setTimeout(() => setUsers(filteredusers), 1000);
    }
  }, [query, users]);

  return (
    <div style={{ padding: "20px" }}>
      <div className="top">
        <h2>Users</h2>
        <div className="top_right">
          <div className="input_wrapper">
            <input
              type="text"
              placeholder="Search here"
              onChange={handleSearch}
            />
          </div>
          <Button />
        </div>
      </div>

      <div className="table_header">
        <div className="col">
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={isAllChecked}
          />
        </div>

        <div className="col">Id</div>
        <div className="col">Name</div>
        <div className="col">Username</div>
        <div className="col">Email</div>
        <div className="col">Phone</div>
        <div className="col">Address</div>
        <div className="col">Website</div>
      </div>
      {users?.map((user) => (
        <>
          <div className="table_body" key={user?.id}>
            <div className="col">
              <input
                type="checkbox"
                name={user?.username}
                id={user.id}
                onChange={handleClick}
                checked={checkedInput.includes(user.id)}
              />
            </div>
            <div className="col">{user?.id}</div>
            <div className="col">{user?.name}</div>
            <div className="col">{user?.username}</div>

            <div className="col">{user?.email}</div>
            <div className="col">{user?.phone}</div>
            <div className="col">{user?.address?.street}</div>

            <div className="col">{user?.website}</div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Table;
