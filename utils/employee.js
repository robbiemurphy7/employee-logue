const inquirer = require("inquirer");

const department = async () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "employee",
        message: "Enter employee name.",
        validate: (dpt) => {
          if (dpt) {
            return true;
          } else {
            console.log("Enter employee name");
            return false;
          }
        },
      },
    ]);
  };
  
  module.exports = department;