const request = require("supertest");
const app = require("../app");

describe("Test routes", () => {
  it('GET / sends "Hello World" as json', (done) => {
    request(app)
      .get("/")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((response) => {
        const expected = { message: "Hello World!" };
        expect(response.body).toEqual(expected);
        done();
      });
  });
  it("POST / succesfully failed", (done) => {
    request(app)
      .post("/")
      .send({})
      .expect(422)
      .expect("Content-Type", /json/)
      .then((response) => {
        const expected = { error: "required field(s) missing" };
        expect(response.body).toEqual(expected);
        done();
      });
  });
  /* it("POST / succesfully success", (done) => {
    request(app)
      .post("/")
      .send({ url: 'https://jestjs.io', title: 'Jest' })
      .expect(201)
      .expect("Content-Type", /json/)
      .then((response) => {
        const expected = {"id": 1, "url": "https://jestjs.io", "title": "Jest"};
        expect(response.body).toEqual(expected);
        done();
      });
  });*/
});
