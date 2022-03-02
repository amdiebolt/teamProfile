const Employee = require('./employee');

class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    super(id, name, email);
    this.officeNumber = officeNumber
    this.title = 'Manager'
  }

  getNumber(){
      return this.officeNumber
  }}

  module.exports = Manager
