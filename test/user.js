let should = require("chai").should(),
  expect = require("chai").expect,
  supertest = require("supertest"),
  api = supertest("http://localhost:3000"),
  faker = require("faker");

describe("User Create", () => {
  let username = faker.name.firstName();
  let password = faker.lorem.word();

  it("should return a 201 response and create a new user", (done) => {
    api
      .post(`/api/users`)
      .set("username", "patrick")
      .set("password", "password")
      .set("Accept", "application/json")
      .send({
        username: username,
        password: password,
      })
      .expect(201, done);
  });

  it("should return a 409 response", (done) => {
    api
      .post(`/api/users`)
      .set("username", "patrick")
      .set("password", "password")
      .set("Accept", "application/json")
      .send({
        username: username,
        password: password,
      })
      .expect(409, done);
  });
});
