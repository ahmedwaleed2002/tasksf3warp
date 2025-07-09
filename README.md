# Day 3 CLI App

A Node.js CLI application that provides file creation, operation logging, and system information features.

## Features

1. **File Creation**: Create a file (`userFile.txt`) with user-provided text input
2. **Operation Logging**: Log all operations with timestamps to `operationLogs.txt`
3. **System Information**: Display platform, memory usage, and CPU core count

## Usage

1. Install dependencies (if any):
   ```bash
   npm install
   ```

2. Run the application:
   ```bash
   node index.js
   ```

3. Choose from the menu options:
   - **Option 1**: Create a file - Enter text to create `userFile.txt`
   - **Option 2**: View system information - Display OS details
   - **Option 3**: Exit the application

## Files Created

- `userFile.txt` - Contains user input text
- `operationLogs.txt` - Contains timestamped operation logs

## System Requirements

- Node.js (version 12 or higher)
- No external dependencies required (uses built-in Node.js modules)

## Modules Used

- `fs` - File system operations
- `path` - File path management
- `os` - System information
- `readline` - Command-line user input
