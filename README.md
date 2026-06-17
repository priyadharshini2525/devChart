##TASK MANAGEMENT APP

A modern *Task Management Web Application* built with **Next.js**, **React**, **MongoDB Atlas**, and **Tailwind CSS**.

The application follows a **Kanban Board** style interface with drop down with different stages such as TO-DO, IN PROGRESS, DONE.
Users can create tasks, assign priorities, search tasks, track completion progress, view activity logs, and manage their workflow through an intuitive and responsive interface. 


##LIVE DEMO 

https://dev-chart-8mwe.vercel.app/

##FEATURES

##Dashboard
- View all tasks in a clean dashboard.
- Tasks are organized in a Kanban style layout.

##Create Tasks
- Create tasks by filling out a form.
- Add:
  - Title
  - Description
  - Priority Level

##Priority Indicators
Tasks are color coded based on priority:

    High = Red 
    Medium = Yellow 
    Low = Green

##Kanban Board
Tasks are organized into the following columns:

- Todo
- In Progress
- Done

Users can easily move tasks between different stages using a dropdown menu.

##Search Bar
- Search tasks instantly by title.
- Makes it easy to find tasks in large projects.

##Delete Tasks
- Delete tasks that are no longer needed.
- Updates instantly in the UI.

##Completion Progress
Displays:

- Total Tasks
- Done Tasks
- Remaining Tasks
- Progress Bar showing completion percentage

##Activity Log
- Keeps track of user actions.
- Logs activities such as:
  - Task created
  - Status changed
  - Task deleted

##TECH STACK

###Frontend
- Next.js
- React.js
- Tailwind CSS

###Backend
- Next.js API Routes

###Database
- MongoDB Atlas
- Mongoose

###Deployment
- Vercel

##SETUP INSTRUCTIONS

##1. Clone the repository

git clone https://github.com/priyadharshini2525/devChart

##2. Navigate to the project folder

cd devChart


##3. Install dependencies

npm install

##4. Create Environment Variables

Create a file named:   .env.local

Add:

MONGODB_URI= mongodb+srv://priyadharshinil2025a_db_user:kN4drrEOcOSWZGu2@cluster0.fh5oqav.mongodb.net/?appName=Cluster0

##5. Run the application

npm run dev

Open:

http://localhost:3000

##DEPLOYEMENT INSTRUCTIONS

##Deploying on Vercel

1. Push the project to GitHub.

2. Login to Vercel.

3. Import the GitHub repository.

4. Add environment variable (key, value)

5. Click *Deploy*.

6. Once deployed, access the application using:

LINK: https://dev-chart-8mwe.vercel.app/

##SCREENSHOTS OF WORKING WEBSITE
  - Attached in a separate folder

##KNOWN LIMITATIONS

-task status is changed using a dropdown menu.
- User Authentication is not available.
- Due dates and reminders are not implemented.
- Search functionality currently supports searching only by task title.
- File attachments are not supported.

##FUTURE ENHANCEMENTS

- Drag and Drop Kanban Cards
- User Authentication
- Dark Mode
- Due Dates and Reminders
- Team Collaboration
- File Attachments
- Notifications
-  a graph view page showing tasks as nodes with arrows between them, a way to add dependencies between tasks, and the BFS/DFS logic running underneath(using DSA).

##Author

**PRIYADHARSHINI L**