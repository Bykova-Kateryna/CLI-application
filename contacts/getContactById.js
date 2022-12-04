const allContacts = require("./listContacts");
const getContactById = async (contactId) => {
  try {
    const contacts = await allContacts();
    const result = contacts.find((contact) => contact.id === contactId);
    if (!result) {
      return null;
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getContactById;
