AI Hackathon Team Management Platform

An AI-assisted hackathon management system that allows participants to submit projects, administrators to evaluate them, and automatically generates a ranked leaderboard.

This platform simplifies hackathon organization by combining AI-based scoring, admin validation, and real-time leaderboard generation.

Project Overview

Hackathons often struggle with managing multiple teams, collecting submissions, and fairly evaluating projects.

This project provides a web-based solution that allows:

Participants to submit projects easily

AI to perform preliminary evaluation

Admins to review and score submissions

Automatic ranking of teams through a leaderboard

The system ensures transparent and efficient judging.

Key Features
Participant Features

Submit project details

Provide demo links and GitHub repositories

Upload screenshot proof of UI

Team-based submission

AI Evaluation

AI evaluates project submissions

Assigns a preliminary score based on evidence and completeness

Admin Dashboard

View all submitted projects

See AI scores

Assign admin evaluation scores

Calculate final scores automatically

Leaderboard System

Automatic ranking of teams

Animated podium display for top teams

Real-time updates

Leaderboard Publishing

Leaderboard is hidden until admin publishes results

Admin controls when results become visible

Submission Deadline

Submissions automatically close after deadline

Prevents late entries

System Workflow
Participants submit projects
        ↓
AI evaluates submission
        ↓
Admin reviews and assigns score
        ↓
Final score calculated
        ↓
Leaderboard generated
        ↓
Admin publishes results
Scoring System

Final scores are calculated using both AI evaluation and admin review.

Final Score =
(AI Score × 0.3) + (Admin Score × 0.7)

This ensures balanced evaluation using both automation and human judgment.

Technology Stack
Frontend

HTML5

Tailwind CSS

JavaScript (ES Modules)

Backend

Firebase Firestore Database

Development Tools

VS Code

GitHub

Firebase Console

AI-assisted development tools

Project Structure
ai-hackathon-management
│
├── index.html
├── submit.html
├── admin.html
├── admin-login.html
├── leaderboard.html
│
├── js
│   ├── firebase.js
│   ├── submit.js
│   ├── admin.js
│   ├── leaderboard.js
│   └── ai.js
│
├── prompts_used.txt
└── README.md
Database Structure
submissions collection

Stores project submissions.

Example:

name: Abdul
team: A
description: AI crop disease detection system
demo: https://demo.com
github: https://github.com/project
screenshot: https://image.com/demo.png

aiScore: 6
adminScore: 9
finalScore: 8.1
settings collection

Controls leaderboard visibility.

leaderboard
    public: true / false
Installation

Clone the repository:

git clone https://github.com/razithabdul506-arch/ai-hackathon-management.git

Open the project folder and run using Live Server in VS Code.

Usage
Participant

Open:

submit.html

Submit project details.

Admin

Open:

admin-login.html

Admin password:

admin123

Admin can review submissions and publish leaderboard.

Leaderboard

Open:

leaderboard.html

Shows ranked teams after admin publishes results.

Future Improvements

Possible improvements include:

AI analysis of GitHub repositories

File upload using Firebase Storage

Multi-admin authentication

Detailed AI feedback for submissions

Advanced judging analytics

Author

Abdul Razith

AI Hackathon Project

License

This project is for educational and hackathon demonstration purposes.
