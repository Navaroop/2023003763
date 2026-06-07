# Campus Notifications System

This repository contains the solutions developed for the Campus Notifications System assessment.

## Project Structure

### 1. logging_middleware

A reusable logging middleware that sends application logs to the evaluation logging service.

Features:

* Centralized logging
* Environment variable support
* API integration for log storage

### 2. notification_app_be

Backend implementation for the notification service.

Features:

* Fetch notifications from the provided API
* Priority Inbox implementation
* Notification sorting based on type priority
* Uses the logging middleware for application logs

Priority Order:

1. Placement
2. Result
3. Event

### 3. notification_app_fe

React + Material UI frontend.

Features:

* View all notifications
* Priority Inbox page
* Top-N notification filtering
* Responsive UI
* React Router navigation
* Material UI components

### Additional Documents

* notification_system_design.md – Design explanation for the Priority Inbox implementation.

## Technologies Used

* JavaScript
* Node.js
* React
* React Router
* Material UI
* Axios
* Git & GitHub

## Author

Navaroop Amjuri
