const neo4j = require("neo4j-driver");

const NEO4J = {
  driver: null,

  init: async function () {
    this.driver = neo4j.driver("bolt://db", neo4j.auth.basic("neo4j", "password"));
    await this.driver.close();
  },

  query: async function (query, params = {}) {
    // Lazy initialization.
    if (!this.driver) {
      this.init();
    }

    let session = this.driver.session();
    let result = null;
    try {
      result = await session.run(query, params);
    } finally {
      await session.close();
    }
    return result ? result.records : null;
  },

  close: function () {
    this.driver.close();
  },
};

export default NEO4J;
