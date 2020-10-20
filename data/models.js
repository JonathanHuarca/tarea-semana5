class Shop {
  constructor(id, shopName) {
    this.id = id;
    this.shopName = shopName;
  }
}

class Contact {
  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

module.exports = {
  Shop,
  Contact,
};
