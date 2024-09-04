const { sendWhatsApp } = require('../../../src/services//whatsappServices.js');

describe('WhatsApp Service', () => {
  test('sendWhatsApp function exists', () => {
    expect(typeof sendWhatsApp).toBe('function');
  });
});