const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array to store employees
let employees = [];

// Display menu options
function showMenu() {
  console.log('\n=== Employee Management System ===');
  console.log('1. Add Employee');
  console.log('2. List Employees');
  console.log('3. Remove Employee');
  console.log('4. Exit');

  rl.question('Select an option: ', (choice) => {
    switch (choice) {
      case '1':
        addEmployee();
        break;
      case '2':
        listEmployees();
        break;
      case '3':
        removeEmployee();
        break;
      case '4':
        console.log('Exiting...');
        rl.close();
        break;
      default:
        console.log('Invalid option. Try again.');
        showMenu();
    }
  });
}

// Add a new employee
function addEmployee() {
  rl.question('Enter employee name: ', (name) => {
    rl.question('Enter employee ID: ', (id) => {
      // Check for duplicate ID
      if (employees.find(emp => emp.id === id)) {
        console.log(`Employee with ID ${id} already exists.`);
      } else {
        employees.push({ name, id });
        console.log(`Employee ${name} added successfully.`);
      }
      showMenu();
    });
  });
}

// List all employees
function listEmployees() {
  if (employees.length === 0) {
    console.log('No employees found.');
  } else {
    console.log('\nEmployee List:');
    employees.forEach(emp => {
      console.log(`ID: ${emp.id}, Name: ${emp.name}`);
    });
  }
  showMenu();
}

// Remove an employee by ID
function removeEmployee() {
  rl.question('Enter employee ID to remove: ', (id) => {
    const index = employees.findIndex(emp => emp.id === id);
    if (index === -1) {
      console.log(`No employee found with ID ${id}.`);
    } else {
      const removed = employees.splice(index, 1)[0];
      console.log(`Employee ${removed.name} removed successfully.`);
    }
    showMenu();
  });
}

// Start the app
showMenu();
