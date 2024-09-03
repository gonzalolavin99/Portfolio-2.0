const { sendWhatsApp } = require('../../../src/services/whatsappService');

describe('WhatsApp Service', () => {
  test('sendWhatsApp function exists', () => {
    expect(typeof sendWhatsApp).toBe('function');
  });
});