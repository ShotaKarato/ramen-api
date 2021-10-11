const app = require("../server/server");
// We know about chai...
const chai = require("chai");
// ...with chai-http we can add matchers for making http requests!
const chaiHttp = require("chai-http");
// ... we need to tell chai to use chaiHttp though. It is a middleware
chai.use(chaiHttp);
// this enables us to use .should assertions instead of expect. Personal Preference
chai.should();

describe("The express server", () => {
  let request;
  beforeEach(() => {
    request = chai.request("http://localhost:4000");
  });

  describe("express basics", () => {
    describe("GET /api/ramen", () => {
      it("should return status of 200", async () => {
        const res = await request.get("/api/ramen");
        res.should.have.status(200);
      });
    });
  });

  describe("express basics", () => {
    describe("GET /api/ramen/:id", () => {
      it("should return status of 200", async () => {
        const res = await request.get("/api/ramen/5");
        res.should.have.status(200);
      });
    });
  });

  describe("express basics", () => {
    describe("POST /api/ramen/", () => {
      it("should return status of 200", async () => {
        const shopInfo = {shop_name_jp: "中華そば白川", shop_name_en: "Chukasoba Shirakawa", shop_location: "神奈川県横浜市保土ケ谷区岩井町53 稲村ビル 1F", payment_method: 1};
        const res = await request.post("/api/ramen/11").send(shopInfo);
        res.should.have.status(200);
      });
    });
  });

  describe("express basics", () => {
    describe("PATCH /api/ramen/11", () => {
      it("should return status of 200", async () => {
        const shopInfo = {shop_name_jp: "中華そば白川"};
        const res = await request.patch("/api/ramen/11").send(shopInfo);
        res.should.have.status(200);
      });
    });
  });

  describe("express basics", () => {
    describe("DELETE /api/ramen/11", () => {
      it("should return status of 200", async () => {
        const res = await request.delete("/api/ramen/11");
        res.should.have.status(200);
      });
    });
  });
});