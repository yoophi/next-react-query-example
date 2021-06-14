import Link from "next/link";
import React from "react";

export const User = ({ user }) => {
  return (
    <div>
      <h1>
        <small>#{user.id} </small>
        <Link href={`/simple/${user.id}`}>
          <a>{user.name}</a>
        </Link>
      </h1>
      <p>{user.email}</p>
      <pre>{JSON.stringify({ user }, null, 2)}</pre>
    </div>
  );
};
