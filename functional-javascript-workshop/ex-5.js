module.exports = (goodUsers) =>
  (users) => users.every(
    (user) => goodUsers.some(
      (goodUser) => goodUser.id === user.id
    )
  )
