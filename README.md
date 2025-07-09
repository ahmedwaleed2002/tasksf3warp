# Day 3 CLI App

A Node.js CLI application that provides file creation, operation logging, and system information features.

## Features

1. **File Creation**: Create a file (`userFile.txt`) with user-provided text input.
   - Prompts user to enter text, which is saved in the file.
   - Logs success or failure in `operationLogs.txt`.

2. **Operation Logging**: Log operations with timestamps to `operationLogs.txt`.
   - Capture success/failure for all menu-driven actions.
   - Allows reviewing past activities.

3. **System Information**: Display platform, memory usage, and CPU core count.
   - Utilizes Node.js's `os` module.
   - Logs viewing action.

4. **View Logs**: Display all logged operations with timestamps.
   - Reads and displays content of `operationLogs.txt`.

5. **Git Commit**: Allows committing current changes to Git repository.
   - Prompts for a commit message.
   - Utilizes `child_process` to execute Git commands.
   - Logs commit actions with success/failure status.

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
   - **Option 3**: View logs - Display all operation logs with timestamps
   - **Option 4**: Git Commit - Commit changes with a message
   - **Option 5**: Exit the application

## Files Created

- `userFile.txt` - Contains user input text
- `operationLogs.txt` - Contains timestamped operation logs

## System Requirements

- Node.js (version 12 or higher)
- Git (for commit functionality)
- No external dependencies required (uses built-in Node.js modules)

## Technical Implementation

### Modules Used

- **`fs` (File System)**: For file creation (`userFile.txt`) and logging operations (`operationLogs.txt`)
- **`path`**: For managing file paths (currently included for potential future enhancements)
- **`os` (Operating System)**: For retrieving system information (platform, memory, CPU cores)
- **`readline`**: For interactive command-line user input
- **`child_process`**: For executing Git commands within the application

### Code Structure

#### 1. **File Creation Function (`createFile()`)**
- **Purpose**: Creates a file with user-provided text
- **Implementation**: Uses `fs.writeFile()` to create `userFile.txt`
- **Error Handling**: Catches and logs file creation errors
- **Logging**: Records success/failure in operation logs

#### 2. **Operation Logging Function (`logOperation()`)**
- **Purpose**: Maintains a timestamped log of all operations
- **Implementation**: Uses `fs.appendFile()` to add entries to `operationLogs.txt`
- **Format**: `[ISO timestamp] LOG_LEVEL: Operation description`
- **Why**: Provides audit trail and debugging capability

#### 3. **System Information Function (`showSystemInfo()`)**
- **Purpose**: Displays current system specifications
- **Implementation**: Uses `os` module methods:
  - `os.platform()` - Operating system platform
  - `os.freemem()` - Available memory in bytes (converted to MB)
  - `os.totalmem()` - Total memory in bytes (converted to MB)
  - `os.cpus().length` - Number of CPU cores
- **Why**: Useful for system monitoring and debugging

#### 4. **View Logs Function (`viewLogs()`)**
- **Purpose**: Display all logged operations for review
- **Implementation**: Uses `fs.readFile()` to read `operationLogs.txt`
- **Error Handling**: Handles cases where log file doesn't exist
- **Why**: Allows users to review application history

#### 5. **Git Commit Function (`commitToGit()`)**
- **Purpose**: Commit changes to Git repository with user-provided message
- **Implementation**: Uses `child_process.exec()` to run Git commands:
  - `git add .` - Stages all changes
  - `git commit -m "message"` - Commits with provided message
- **Error Handling**: Catches Git command failures
- **Logging**: Records commit success/failure
- **Why**: Integrates version control into the workflow

#### 6. **Menu System (`showMenu()`)**
- **Purpose**: Provides interactive command-line interface
- **Implementation**: Uses `readline` for user input handling
- **Options**: File creation, system info, logs, Git commit, exit
- **Why**: Makes the application user-friendly and navigable

### Development Steps & Reasoning

#### Step 1: Project Initialization
```bash
npm init -y
git init
```
**Reasoning**: Set up Node.js project structure and Git repository for version control.

#### Step 2: Core File Creation Feature
**Code**: `createFile()` function with `fs.writeFile()`
**Reasoning**: Primary functionality as requested - allows users to create files with input.

#### Step 3: Operation Logging
**Code**: `logOperation()` function with `fs.appendFile()`
**Reasoning**: Provides audit trail and debugging capability for all operations.

#### Step 4: System Information Display
**Code**: `showSystemInfo()` function with `os` module
**Reasoning**: Demonstrates system interaction and provides useful diagnostic information.

#### Step 5: Log Viewing Feature
**Code**: `viewLogs()` function with `fs.readFile()`
**Reasoning**: Allows users to review application history without external tools.

#### Step 6: Git Integration
**Code**: `commitToGit()` function with `child_process.exec()`
**Reasoning**: Integrates version control workflow directly into the application.

#### Step 7: Interactive Menu System
**Code**: `showMenu()` function with `readline`
**Reasoning**: Provides user-friendly interface for accessing all features.

### Error Handling Strategy

- **File Operations**: All file operations include error callbacks
- **Git Operations**: Git command failures are caught and logged
- **User Input**: Invalid menu choices are handled gracefully
- **Logging**: Errors are recorded in operation logs for debugging

### File Structure

```
day3-cli-app/
├── .git/                 # Git repository
├── .gitignore           # Git ignore file
├── index.js             # Main application file
├── package.json         # Node.js project configuration
├── README.md           # This documentation
├── operationLogs.txt   # Generated: Operation logs
└── userFile.txt        # Generated: User-created file
```

### Git Commit History

The project follows a structured commit approach:

1. **Initial commit**: Basic project structure
2. **Feature commits**: Each major feature added separately
3. **Enhancement commits**: Improvements and bug fixes
4. **Documentation commits**: README updates and code comments

### Future Enhancements

- Add file editing capabilities
- Implement multiple file creation
- Add push/pull Git operations
- Include configuration file support
- Add unit tests

## Modules Used

- `fs` - File system operations
- `path` - File path management
- `os` - System information
- `readline` - Command-line user input
