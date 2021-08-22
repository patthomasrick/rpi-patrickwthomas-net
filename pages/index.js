import useSwr from "swr";
import Link from "next/link";
import getPool from "../lib/db";

const fetcher = (url) => fetch(url).then((res) => res.json());

export async function getStaticProps() {
  const pool = getPool();

  

  return {
    props: {}
  };
}

export default function Index() {
  const { data, error } = useSwr("/api/users", fetcher);

  if (error) return <div>Failed to load users</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <Link href="/user/[id]" as={`/user/${user.id}`}>
            <a>{`User ${user.id}`}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
