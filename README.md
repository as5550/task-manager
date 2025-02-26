# Task Management Dashboard

## Overview

The Task Management Dashboard is a web application designed to help users manage their tasks effectively. The dashboard provides an overview of upcoming, overdue, and completed tasks, with the ability to add, edit, delete, and prioritize tasks. It also includes search and filtering features to quickly find tasks based on specific criteria.

### Task Features
- Task Management:
    Add Task: Click the "Show Form To Add Task" button to create a new task. Fill out the task form with:

    Title: A short description of the task.
    Description: Detailed information about the task.
    Due Date: The date when the task is due.
    Priority Level: Choose between High, Medium, and Low priority.
    
    Edit Task: Click on the "Edit" button next to any task to modify its details.

    Delete Task: Click on the "Delete" button next to any task to remove it from the list.

- Priority Levels:
    Tasks can be assigned a priority level when they are created or edited:

    High: Urgent tasks that need immediate attention.
    Medium: Tasks that are important but not urgent.
    Low: Tasks that can be addressed at a later time.

- Search and Filter:
    Search: Use the search bar to find tasks by title or description.

- Filter: Filter tasks by:
    Priority level (High, Medium, Low)
    Completion status (Upcoming, Overdue, Completed)

## Setup Instructions

To get started with the project, follow the instructions below to set up the development environment.

### Prerequisites:
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation:

1. Clone the repository:
    ```bash
    git clone https://github.com/as5550/task-manager.git
    ```

2. Navigate to the project folder:
    ```bash
    cd task-dashboard
    ```

3. navigate to the branch:
    check out the branch `master`

4. Install the dependencies:
    ```bash
    npm install
    ```

5. Start the application:
    ```bash
    npm start
    ```

The application will be available at `http://localhost:3000` in your browser.

### Optional: To run the application in production mode:
```bash
npm run build
npm run serve
