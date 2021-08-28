import UserService from "../services/neo4j/user";

export default function User() {
  return {
    username: "",
    password: "",
    auth_key: "",

    getUsername: function () {
      return this.username;
    },
    setUsername: function (value) {
      this.username = value;
    },

    getPassword: function () {
      return this.username;
    },
    setPassword: function (value) {
      this.password = value;
    },

    getAuthKey: function () {
      return this.auth_key;
    },
    setAuthKey: function (value) {
      this.auth_key = value;
    },

    load: async function () {
      let matches = await UserService.match([this.username]);
      console.log(matches);
      if (!matches) {
        return;
      }
      this.username = matches[0].properties.username;
      this.password = matches[0].properties.password;
      this.auth_key = matches[0].properties.auth_key;
      console.log(this);
    },
  };
}
