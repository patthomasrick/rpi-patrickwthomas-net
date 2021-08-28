import NEO4J from "../../../db";

const UserService = {
  neo4j: NEO4J,

  match: async function (ids) {
    console.log(ids);
    let records = await NEO4J.query("MATCH (user:USER) WHERE user.username IN $ids RETURN COLLECT(DISTINCT user) as users", {
      ids: ids,
    });
    return records[0].get("users");
  },

  merge: function (users) {},
};

export default UserService;
