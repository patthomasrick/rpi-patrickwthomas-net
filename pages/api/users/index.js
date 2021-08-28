import User from "../../../lib/data/models/user";

export default function userHandler(req, res) {
  const {
    query: { username, password },
    headers,
    method,
  } = req;

  switch (method) {
    case "GET":
      // Get data from your database
      console.log(headers);
      res.status(200).json({ username, password });
      break;
    case "POST":
      // Update or create data in your database
      console.log(headers);
      let user = User();
      user.setUsername(headers.username);
      user.load();
      res.status(200).json({ username, password });
      break;
    // case "DELETE":
    //   // Update or create data in your database
    //   res.status(200).json({ username, password });
    //   break;
    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
