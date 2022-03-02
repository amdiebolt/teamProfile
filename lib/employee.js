class Employee {
    constructor(name, id, email) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.title = "Employee"
    }
    
    getId(){
        return this.id
    }
    getName(){
        return this.name
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return this.title
    }

  }
  module.exports = Employee;
  