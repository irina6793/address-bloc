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
           this.getDate('November 26, 2018 18:15:30');
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
      console.log('November 26, 2018 18:15:30');
      return new Date();
      this.main();
    }

      exit(){
         console.log("Thanks for using AddressBloc!");
         process.exit();
       }
}
