import { splitMessage } from '../services';

// Invalid message: it contains a span of non-whitespace characters longer than 50 characters

describe('scenes/services.js', () => {
  describe('splitMessage', () => {
    const createMockMessage = (numOfChar) => {
      return Array(numOfChar + 1).join('Z');  // create a string with number of Z characters
    };

    it('should return null when message is not a string', () => {
      const message = [1, 2];
      const result = splitMessage(message);

      expect(result).toBeNull();
    });

    it('should return an array having 1 element is raw message when message length is less than or equal to 50', () => {
      const message = createMockMessage(50);
      const result = splitMessage(message);

      expect(result.length).toBe(1);
      expect(result[0]).toBe(message);
    });

    it('should return an array having 1 element when message length is greater than 50' +
      'but trim message is less than 50', () => {
      const trimMessage = createMockMessage(50);
      const message = `     ${trimMessage}     `;
      const result = splitMessage(message);

      expect(result.length).toBe(1);
      expect(result[0]).toBe(trimMessage);
    });

    it('should return null when message is invalid', () => {
      const message = createMockMessage(51);
      const result = splitMessage(message);

      expect(result).toBeNull();
    });

    it('should return an array having 2 elements when message is valid and char of 50th position is empty', () => {
      const message1 = createMockMessage(49);
      const message2 = createMockMessage(30);
      const message = `${message1} ${message2}`;
      const result = splitMessage(message);

      expect(result.length).toBe(2);
      expect(result[0]).toBe(message1);
      expect(result[1]).toBe(message2);
    });

    it('should return an array having 2 elements when message is valid and next char of 50th position is empty', () => {
      const message1 = createMockMessage(50);
      const message2 = createMockMessage(50);
      const message = `${message1} ${message2}`;
      const result = splitMessage(message);

      expect(result.length).toBe(2);
      expect(result[0]).toBe(message1);
      expect(result[1]).toBe(message2);
    });

    it('should return an array having 2 elements when message is valid and split right into a word', () => {
      const message1 = createMockMessage(45);
      const message2 = createMockMessage(10);
      const message3 = createMockMessage(30);
      const message = `${message1} ${message2} ${message3}`;
      const result = splitMessage(message);

      expect(result.length).toBe(2);
      expect(result[0]).toBe(message1);
      expect(result[1]).toBe(`${message2} ${message3}`);
    });

    it('should return an array having 2 elements ' +
      'when message has many white space and char of 50th position is empty', () => {
      const message1 = createMockMessage(49);
      const message2 = createMockMessage(30);
      const message = `    ${message1}             ${message2}      `;
      const result = splitMessage(message);

      expect(result.length).toBe(2);
      expect(result[0]).toBe(message1);
      expect(result[1]).toBe(message2);
    });

    it('should return null when message has any sub message is invalid', () => {
      const message1 = createMockMessage(49);
      const invalidMessage2 = createMockMessage(51);
      const message = `${message1} ${invalidMessage2}`;
      const result = splitMessage(message);

      expect(result).toBeNull();
    });
  });
});
