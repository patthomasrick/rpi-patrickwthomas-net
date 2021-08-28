import getPool from "../../../lib/db";

export async function getStaticProps() {
  const pool = getPool();

  return {
    props: {},
  };
}

export default function userUsernameHandler(req, res) {
  const {
    query: { username, password },
    method,
  } = req;

  switch (method) {
    case "GET":
      // Get data from your database
      res.status(200).json({ username, password });
      break;
    case "POST":
      // Update or create data in your database
      res.status(200).json({ username, password });
      break;
    case "DELETE":
      // Update or create data in your database
      res.status(200).json({ username, password });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
