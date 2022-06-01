const inquirer = require("inquirer");

const department = async () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "department",
        message: "Enter department.",
        validate: (dpt) => {
          if (dpt) {
            return true;
          } else {
            console.log("Enter department name");
            return false;
          }
        },
      },
    ]);
  };
  
  module.exports = department;