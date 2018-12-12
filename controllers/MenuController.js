const inquirer = require('inquirer');
const ContactController = require("./ContactController");

module.exports = class MenuController {
   constructor(){
   this.mainMenuQuestions = [
         {
          type: "list",
           name: "mainMenuChoice",
           message: "Please choose from an option below: ",
           choices: [
             "Add new contact",
             "View all contacts",
             "Get today's date",
             "Exit"
           ]
         }
       ];
       this.book = new ContactController();
}

   main(){
     console.log(`Welcome to AddressBloc!`);
     inquirer.prompt(this.mainMenuQuestions).then((response) => {
       switch(response.mainMenuChoice){
         case "Add new contact":
           this.addContact();
           break;
        case "View all contacts":
          this.getContacts();
          break;
         case "Get today's date":
           console.log(this.getDate().toString());
           break;
         case "Exit":
           this.exit();
         default:
           console.log("Invalid input");
           this.main();
       }
     })
     .catch((err) => {
       console.log(err);
     });
}

   clear(){ /* method definition */ }
    addContact(){
         this.clear();
         inquirer.prompt(this.book.addContactQuestions).then((answers) => {
                this.book.addContact(answers.name, answers.phone, answers.email).then((contact) => {
                  console.log("Contact added successfully!");
                  this.main();
                }).catch((err) => {
                  console.log(err);
                  this.main();
                });
              });
       }
    getContacts(){
         this.clear();
              this.book.getContacts().then((contacts) => {
              for (let contact of contacts) {
                console.log(`
                name: ${contact.name}
                phone number: ${contact.phone}
                email: ${contact.email}
                ---------------`
                );
              }
              this.main();
            }).catch((err) => {
              console.log(err);
              this.main();
            });
          }
      getDate() {
      return new Date();
    }

      exit(){
         console.log("Thanks for using AddressBloc!");
         process.exit();
       }

       getContactCount(){
         return this.contacts.length;
     }

       remindMe(){
          return "Learning is a life-long pursuit.";
        }
}
