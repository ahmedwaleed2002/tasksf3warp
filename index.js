const fs = require('fs');
const path = require('path');
const os = require('os');
const readline = require('readline');

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to log operations
function logOperation(operation) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${operation}\n`;
  
  fs.appendFile('operationLogs.txt', logEntry, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });
}

// Function to create a file based on user input
function createFile() {
  rl.question('Enter the text you want to write to the file: ', (userInput) => {
    fs.writeFile('userFile.txt', userInput, (err) => {
      if (err) {
        console.error('Error creating file:', err);
        logOperation('ERROR: Failed to create userFile.txt');
      } else {
        console.log('File "userFile.txt" created successfully!');
        logOperation('SUCCESS: Created userFile.txt with user input');
      }
      showMenu();
    });
  });
}

// Function to display system information
function viewLogs() {
  fs.readFile('operationLogs.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading log file:', err);
    } else {
      console.log('\n=== Operation Logs ===\n');
      console.log(data);
      console.log('=======================\n');
    }
    showMenu();
  });
}
function showSystemInfo() {
  console.log('\n=== System Information ===');
  console.log(`Platform: ${os.platform()}`);
  console.log(`Free Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`);
  console.log(`CPU Cores: ${os.cpus().length}`);
  console.log('==========================\n');
  
  logOperation('INFO: Displayed system information');
  showMenu();
}

// Function to show the main menu
function showMenu() {
  console.log('\n=== Day 3 CLI App ===');
  console.log('1. Create a file');
console.log('2. View system information');
  console.log('3. View logs');
  console.log('4. Exit');
  
  rl.question('Choose an option (1-3): ', (choice) => {
    switch (choice) {
      case '1':
        createFile();
        break;
      case '2':
        showSystemInfo();
        break;
case '3':
        viewLogs();
        break;
      case '4':
        console.log('Goodbye!');
        logOperation('INFO: Application exited');
        rl.close();
        break;
      default:
        console.log('Invalid choice. Please try again.');
        showMenu();
        break;
    }
  });
}

// Start the application
console.log('Welcome to the Day 3 CLI App!');
logOperation('INFO: Application started');
showMenu();
