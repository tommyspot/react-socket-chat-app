import { MAX_LENGTH, EMPTY_STRING } from '../constants';

const getChunk = (message, index) => {
  const firstMessage = message.substring(0, index);
  const secondMessage = message.substring(index + 1, message.length);

  const splitedSecondMessage = splitMessage(secondMessage);
  if (splitedSecondMessage){
    return [firstMessage, ...splitedSecondMessage];
  }
  return null;
};

export const splitMessage = (rawMessage) => {
  if (typeof rawMessage !== 'string') return null;

  const message = rawMessage.trim();
  const messageLength = message.length;
  if (messageLength <= MAX_LENGTH)
    return [message];
  // Split right a space
  const char = message.charAt(MAX_LENGTH - 1);
  if (char === EMPTY_STRING) {
    return getChunk(message, MAX_LENGTH - 1);
  }
  // Split right a last char of word
  const nextChar = message.charAt(MAX_LENGTH);
  if (nextChar === EMPTY_STRING) {
    return getChunk(message, MAX_LENGTH);
  }
  // Split right into a word
  const subMessage =  message.substring(0, MAX_LENGTH);
  const spaceIndex = subMessage.lastIndexOf(EMPTY_STRING);
  if (spaceIndex !== -1 ) {
    return getChunk(message, spaceIndex);
  }
  return null;
};

export const isMessageError = (message) => {
  const splitedMessage = splitMessage(message);
  return splitedMessage === null;
};
