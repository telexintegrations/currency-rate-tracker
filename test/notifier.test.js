import { fetchExchangeRates, fetchAndSendRates } from '../src/notifier.js';
import fetch from 'node-fetch';
import nodemailer from 'nodemailer';

jest.mock('node-fetch');
jest.mock('nodemailer');

describe('Notifier Module', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchExchangeRates', () => {
    it('should fetch exchange rates successfully', async () => {
      const mockRates = {
        result: 'success',
        conversion_rates: {
          USD: 0.0024,
          EUR: 0.0021,
          GBP: 0.0018,
          AED: 0.0088,
          AWG: 0.0043
        }
      };
      fetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockRates)
      });

      const rates = await fetchExchangeRates();
      expect(rates).toEqual({
        NGN: 1,
        USD: 0.0024,
        EUR: 0.0021,
        GBP: 0.0018,
        AED: 0.0088,
        AWG: 0.0043
      });
    });

    it('should handle fetch error', async () => {
      fetch.mockRejectedValueOnce(new Error('Network error'));

      const rates = await fetchExchangeRates();
      expect(rates).toBeNull();
    });
  });

  describe('fetchAndSendRates', () => {
    it('should fetch rates and send email', async () => {
      const mockRates = {
        NGN: 1,
        USD: 0.0024,
        EUR: 0.0021,
        GBP: 0.0018,
        AED: 0.0088,
        AWG: 0.0043
      };
      fetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({ result: 'success', conversion_rates: mockRates })
      });

      const sendMailMock = jest.spyOn(nodemailer, 'createTransport').mockReturnValue({
        sendMail: jest.fn().mockResolvedValueOnce(true)
      });

      await fetchAndSendRates();
      expect(sendMailMock).toHaveBeenCalled();
    });

    it('should handle errors during fetch and send', async () => {
      fetch.mockRejectedValueOnce(new Error('Network error'));

      await fetchAndSendRates();
      expect(fetch).toHaveBeenCalled();
    });
  });
});