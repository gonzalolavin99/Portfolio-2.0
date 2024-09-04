const contactController = require("../../../src/controllers/contactController");
const Contact = require("../../../src/models/contactModel");
const emailService = require("../../../src/services/emailService");
const whatsappService = require("../../../src/services/whatsappServices");
const sequelize = require("../../../src/config/db");

jest.mock("../../../src/models/contactModel", () => ({
  create: jest.fn(),
}));
jest.mock("../../../src/services/emailService");
jest.mock("../../../src/services/whatsappServices");
jest.mock("../../../src/config/db");

describe("Contact Controller", () => {
  let req, res, mockTransaction;

  beforeEach(() => {
    req = {
      body: {
        name: "Test User",
        company: "Test Company",
        email: "test@example.com",
        phone: "123456789",
        message: "Test message",
      },
    };
    Contact.create.mockReset();
    Contact.create.mockResolvedValue({ id: 1, ...req.body });

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    mockTransaction = {
      commit: jest.fn(),
      rollback: jest.fn(),
    };
    sequelize.transaction = jest.fn().mockResolvedValue(mockTransaction);
  });

  test('submitContact should create a new contact and send notifications', async () => {
    await contactController.submitContact(req, res);
  
    expect(Contact.create).toHaveBeenCalledWith(
      expect.objectContaining(req.body),
      expect.objectContaining({ transaction: expect.any(Object) })
    );
    expect(emailService.sendEmail).toHaveBeenCalled();
    expect(whatsappService.sendWhatsApp).toHaveBeenCalled();
    expect(mockTransaction.commit).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      message: 'Form successfully sent'  // Cambiado de 'Formulario enviado con éxito' a 'Form successfully sent'
    }));
  })});
