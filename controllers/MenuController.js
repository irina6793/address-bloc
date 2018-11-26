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

  getDate(){
    console.log('Chose a date!');
    inquirer.prompt(this.mainMenuChoice).then((response) => {
      console.log(response)
      switch (response.mainMenuChoice) {
        case "Get Date":
          this.timestamp();
          break;
        case "Exit":
          this.exit()
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

      exit(){
         console.log("Thanks for using AddressBloc!");
         process.exit();
       }
}
