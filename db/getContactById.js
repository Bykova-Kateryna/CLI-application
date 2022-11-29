const allContacts = require("./listContacts");
const getContactById = async (contactId) => {
  const contacts = await allContacts();
  const result = contacts.find((contact) => contact.id === contactId);
  if (!result) {
    return null;
  }
  return result;
};

module.exports = getContactById;
