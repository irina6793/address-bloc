const inquirer = require('inquirer');

 module.exports = class MenuController {
   constructor(){
   this.mainMenuQuestions = [
         {
          type: "list",
           name: "mainMenuChoice",
           message: "Please choose from an option below: ",
           choices: [
             "Add new contact",
             "Get Date",
             "Exit"
           ]
         }
       ];
       this.contacts = [];
}

   main(){
     console.log(`Welcome to AddressBloc!`);
     inquirer.prompt(this.mainMenuQuestions).then((response) => {
       switch(response.mainMenuChoice){
         case "Add new contact":
           this.addContact();
           break;
         case "Get Date":
           this.getDate();
           return new Date("2018-11-25T12:00:00Z");
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
         console.log('addContact called');
         this.main();
       }
    getDate() {
          this.clear();
          console.log('getDate called');
          this.main();
    }

      exit(){
         console.log("Thanks for using AddressBloc!");
         process.exit();
       }
}
