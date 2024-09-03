const contactController = require('../../../src/controllers/contactController');
const Contact = require('../../../src/models/contactModel');
const emailService = require('../../../src/services/emailService');
const whatsappService = require('../../../src/services/whatsappServices');
jest.mock('../../../src/models/contactModel');
jest.mock('../../../src/services/emailService');
jest.mock('../../../src/services/whatsappServices');
describe('Contact Controller', () => {
  let req, res;
  beforeEach(() => {
    req = {
      body: {
        name: 'Test User',
        company: 'Test Company',
        email: 'test@example.com',
        phone:'123456789',
        message: 'Test message'
      }
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
  });
  test('submitContact should create a new contact and send notifications', async () => {
    Contact.create.mockResolvedValue({ id: 1, ...req.body });
    emailService.sendEmail.mockResolvedValue();
    whatsappService.sendWhatsApp.mockResolvedValue();
    await contactController.submitContact(req, res);
    expect(Contact.create).toHaveBeenCalledWith(req.body);
    expect(emailService.sendEmail).toHaveBeenCalled();
    expect(whatsappService.sendWhatsApp).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      message: 'Formulario enviado con éxito'
    }));
  });
  // Aquí puedes agregar más tests para manejar casos de error, etc.
});