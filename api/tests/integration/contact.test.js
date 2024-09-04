const request = require("supertest");
const app = require("../../src/app.js");
const sequelize = require("../../src/config/db.js");
const { DESCRIBE } = require("sequelize/lib/query-types");

describe("Contact API Integration Tests", () => {
  beforeAll(async () => {
    //Connect to the database before the tests
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    //Disconnect from the database after the tests
    await sequelize.close();
  });

  describe("POST /api/contact/submit", () => {
    it("should create a new contact when all required fields are provided", async () => {
      const response = await request(app).post("/api/contact/submit").send({
        name: "Test User",
        email: "test@example.com",
        phone: "123456789",
        message: "test message",
      });
      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty("message", "Form successfully sent");
      expect(response.body).toHaveProperty("contact");
    });

    it("should return 400 when required fields are missing", async () => {
      const response = await request(app).post("/api/contact/submit").send({
        name: "Test User",
        email: "test@example.com",
        // Falta el teléfono y el mensaje
      });

      expect(response.statusCode).toBe(400);
      expect(response.body).toHaveProperty(
        "message",
        "Please fill in all fields."
      );
    });
    it("should include company name in the response when provided", async () => {
      const response = await request(app).post("/api/contact/submit").send({
        name: "Test User",
        email: "test@example.com",
        phone: "1234567890",
        message: "This is a test message",
        company: "Test Company",
      });

      expect(response.statusCode).toBe(201);
      expect(response.body.contact).toHaveProperty("company", "Test Company");
    });
  });
});
