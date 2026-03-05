AI Hackathon Team Management Platform
Project Documentation
1. Project Title

AI-Assisted Hackathon Team Management and Evaluation Platform

2. Problem Statement

During hackathons or AI competitions, organizers often face several challenges:

Managing multiple teams and participants.

Collecting project submissions efficiently.

Evaluating projects fairly.

Tracking scores and rankings.

Publishing results transparently.

Most small events still manage these tasks manually using spreadsheets or email submissions, which leads to:

Disorganized data

Delayed evaluation

Difficulty tracking teams

Lack of transparency in scoring

Therefore, an automated system is required to manage hackathon submissions and evaluations effectively.

3. Proposed Solution

This project introduces an AI-Assisted Hackathon Team Management Platform that enables:

Participants to submit their projects easily.

AI to perform preliminary evaluation of submissions.

Admins to review and score projects.

A dynamic leaderboard to display rankings.

The system integrates AI evaluation, human validation, and real-time leaderboard updates to ensure efficient and transparent judging.

4. Objectives

The main objectives of this project are:

Simplify hackathon project submission.

Provide AI-assisted evaluation of submissions.

Allow administrators to validate and score projects.

Automatically calculate final scores.

Display a real-time leaderboard of teams.

Enable admin-controlled publication of results.

5. System Overview

The system consists of the following modules:

1. Participant Submission Module

Participants submit project details including:

Name

Team code

Description of the solution

Demo link

GitHub repository link

Screenshot proof

These submissions are stored in Firebase Firestore database.

2. AI Evaluation Module

The system includes an AI scoring module that evaluates submissions based on:

Problem relevance

Availability of working demo

Code repository presence

UI/UX evidence

Documentation clarity

The AI assigns a score out of 10 points.

3. Admin Evaluation Module

Admins log in to the dashboard and:

View all submissions

Review AI scores

Assign their own evaluation score

Final score calculation:

Final Score =
(AI Score × 0.3) + (Admin Score × 0.7)

This ensures both automated evaluation and human judgment are considered.

4. Leaderboard System

The platform automatically generates a leaderboard that:

Ranks teams by final score

Displays podium winners (Top 3 teams)

Shows rankings for all teams

The leaderboard updates in real time using Firebase database updates.

5. Leaderboard Publishing Control

To maintain fairness:

Leaderboard remains hidden initially.

Admin can click "Publish Leaderboard".

Once published, all users can view the rankings.

6. Submission Deadline System

To prevent late entries:

A deadline timer is set in the system.

After the deadline:

Submission button is disabled.

No new projects can be submitted.

6. System Architecture

The system follows a client-side web application architecture.

Components include:

Frontend (HTML + Tailwind CSS + JavaScript)
        ↓
Firebase Firestore Database
        ↓
AI Evaluation Logic
        ↓
Admin Scoring System
        ↓
Leaderboard Rendering
7. Technologies Used
Frontend

HTML5

Tailwind CSS

JavaScript (ES Modules)

Backend Services

Firebase Firestore (Database)

AI Logic

AI-based scoring logic implemented in JavaScript

Tools

VS Code

Firebase Console

ChatGPT / AI assistance for development

8. Project Features

The platform provides the following features:

User Features

Project submission interface

Team registration via team code

Demo and repository submission

Screenshot evidence upload

Deadline-based submission control

Admin Features

Admin login system

View all project submissions

AI score display

Admin evaluation input

Final score calculation

Leaderboard publishing control

System Features

AI-assisted evaluation

Human validation scoring

Real-time leaderboard updates

Podium display for top teams

Submission deadline enforcement

9. Database Structure
Collection: submissions

Example document:

name: Abdul
team: A
description: AI crop disease detection system
demo: https://demo.com
github: https://github.com/project
screenshot: https://image.com/demo.png

aiScore: 6
adminScore: 9
finalScore: 8.1
Collection: settings
leaderboard
   public: true / false

Used to control leaderboard visibility.

10. System Workflow
Step 1 – Student Submission

Participants open the submission page and provide:

Name

Team code

Project description

Demo link

GitHub repository

Screenshot proof

Step 2 – AI Evaluation

The AI module evaluates the submission and generates a preliminary score.

Step 3 – Admin Evaluation

Admins review submissions and provide additional scores.

Step 4 – Final Score Calculation

Final score is computed automatically.

Step 5 – Leaderboard Generation

Teams are ranked based on final scores.

Step 6 – Result Publication

Admin publishes leaderboard for public viewing.

11. Advantages

The system offers several benefits:

Automates hackathon management

Ensures fair evaluation

Reduces manual workload

Provides transparent scoring

Enables real-time leaderboard updates

12. Future Improvements

Future enhancements may include:

Full AI project code analysis

GitHub repository auto-scanning

File upload via Firebase Storage

Multi-admin authentication

Detailed AI feedback for each project

13. Conclusion

The AI-Assisted Hackathon Team Management Platform successfully demonstrates how artificial intelligence and web technologies can streamline hackathon management.

By integrating AI evaluation, admin validation, and a real-time leaderboard, the system provides a scalable and transparent solution for managing innovation competitions.

This platform can be further expanded to support larger hackathons and automated judging systems.
