const inquirer = require("inquirer");

const role = async () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "role",
        message: "Enter pertinent role.",
        validate: (dpt) => {
          if (dpt) {
            return true;
          } else {
            console.log("Enter pertinent role.");
            return false;
          }
        },
      },
    ]);
  };
  
  module.exports = department;