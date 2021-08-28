let should = require("chai").should(),
  expect = require("chai").expect,
  supertest = require("supertest"),
  api = supertest("http://localhost:3000"),
  faker = require("faker");

// let tokenSymbol = faker.lorem.word();
// let result;

// describe("Token", function () {
//   before(function (done) {
//     api
//       .post("/api/tokens")
//       .set("Accept", "application/x-www-form-urlencoded")
//       .send({
//         name: faker.name.findName(),
//         symbol: tokenSymbol,
//         owner: faker.lorem.word(),
//         userId: faker.random.uuid(),
//         txHash: faker.lorem.word(),
//       })
//       .expect("Content-Type", /json/)
//       .expect(200)
//       .end(function (err, res) {
//         done();
//       });
//   });

//   it("should return a 200 response", function (done) {
//     api.get(`/api/tokens/${tokenSymbol}`).set("Accept", "application/json").expect(200, done);
//   });

//   it("should return a 400 response", function (done) {
//     api.get("/api/tokens/hello").set("Accept", "application/json").expect(400, done);
//   });
// });

describe("User Create", () => {

  let username = faker.name.firstName();
  let password = faker.lorem.word();

  // console.log(username, password);

  before((done) => {
    api
      .post(`/api/tokens/${username}`)
      .set("Accept", "application/json")
      .send({ 
        password: password
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        // console.log(err, res);
        done();
      })
  });

  it("should return a 200 response", (done) => {
    api.get(`/api/user/${username}`).set("Accept", "application/json").expect(200, done);
  });

  it("should return")
});
