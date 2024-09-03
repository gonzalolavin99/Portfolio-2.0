const { sendEmail } = require('../../../src/services/emailService');

describe('Email Service', () => {
  test('sendEmail function exists', () => {
    expect(typeof sendEmail).toBe('function');
  });
});