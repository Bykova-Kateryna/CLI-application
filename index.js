const { Command } = require("commander");
const contactsOperations = require("./db");
const program = new Command();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contact = await contactsOperations.listContacts();
      console.table(contact);
      break;

    case "get":
      const resultGetById = await contactsOperations.getContactById(id);
      if (!resultGetById) {
        throw new Error(`Contacts with id ${id} not found!`);
      }
      console.log(resultGetById);
      break;

    case "add":
      const resultAddContact = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      console.log(resultAddContact);
      break;

    case "remove":
      const deletedContact = await contactsOperations.removeContact(id);
      if (!resultGetById) {
        throw new Error(`Contacts with id ${id} not found!`);
      }
      console.log(deletedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const argv = program.opts();
invokeAction(argv);
