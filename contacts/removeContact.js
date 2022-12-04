const fs = require("fs/promises");

const allContacts = require("./listContacts");

const contactsPath = require("./contactsPath");

const removeContact = async (contactId) => {
  try {
    const contacts = await allContacts();
    const indexDeletedContact = contacts.findIndex(
      (contact) => contact.id === contactId
    );
    if (indexDeletedContact === -1) {
      return null;
    }
    const newContacts = contacts.filter(
      (_, index) => index !== indexDeletedContact
    );
    await fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2));
    return contacts[indexDeletedContact];
  } catch (error) {
    console.log(error);
  }
};

module.exports = removeContact;
