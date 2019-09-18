const profileConstants = {
  available: 'Available',
  balance: 'Balance',
  get label() { return `${profileConstants.available} ${profileConstants.balance}`},
};

export { profileConstants };
