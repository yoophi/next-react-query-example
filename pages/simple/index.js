import React from "react";
import { useQuery } from "react-query";
import { getUsers } from "../../api/userAPI";
import { User } from "../../components/user";

const UserListPage = () => {
  const { isLoading, data, error } = useQuery("users", getUsers);

  if (isLoading) return "Loading ...";
  if (error) return `error: ${error.message}`;

  return (
    <div>
      {React.Children.toArray(data.map((user) => <User user={user} />))}
    </div>
  );
};

export default UserListPage;
