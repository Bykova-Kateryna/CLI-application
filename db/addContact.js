const fs = require("fs/promises");

const { v4 } = require("uuid");

const allContacts = require("./listContacts");

const contactsPath = require("./contactsPath");

const addContact = async (name, email, phone) => {
  const contacts = await allContacts();
  const newContacts = {
    id: v4(),
    name: name,
    email: email,
    phone: phone,
  };
  contacts.push(newContacts);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContacts;
};

module.exports = addContact;
