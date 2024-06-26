import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/action-creators/user";
import { useAction } from "../hooks/useAction";

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useAction();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
