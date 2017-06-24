module.exports = (messages) => messages
  .filter(({ message }) => message.length < 50)
  .map(({ message }) => message)
