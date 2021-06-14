import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import { getUser } from "../../api/userAPI";

const UserDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { isLoading, data, error } = useQuery(["user", { id }], getUser);

  if (isLoading) return "Loading ...";
  if (error) return `error: ${error.message}`;

  return (
    <>
      <h3>#{id}</h3>
      <div>
        <Link href="/simple/">
          <a>back</a>
        </Link>
      </div>
      <pre>{JSON.stringify({ data }, null, 2)}</pre>
    </>
  );
};

export default UserDetailPage;
