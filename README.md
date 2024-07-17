# Meeting Room Scheduler

This project is a Meeting Room Scheduler application built with React. It fetches and displays meeting data from an .ics file, showing the current and upcoming meetings along with their details such as title, description, location, start time, and end time. The application dynamically updates the background image every 5 minutes based on the meeting room's availability (busy or free).

## Features

- **Current Meeting Display**: Shows the title, description, location, start time, and end time of the ongoing meeting.
- **Upcoming Meetings Display**: Lists upcoming meetings with their respective details.
- **Dynamic Background**: Changes background images every 5 minutes based on the meeting room's status (busy or free).
- **Real-Time Updates**: Checks for new meeting data every 60 seconds and updates the display accordingly.

## Installation

Clone the repository:
```bash
git clone https://github.com/emirgokdas/meeting-room-scheduler.git
cd meeting-room-scheduler
```
Install dependencies:
```bash
npm install 
```
Start the proxy server:
Ensure your proxy server is configured to fetch the .ics file.
```bash
node server.js
```
Start the React application:
```bash
npm start
```

## Usage

1. Ensure your .ics URL is correctly set in the `icsUrl` variable within `App.js`.
2. Customize the background images by adding more images to the `busyImages` and `freeImages` arrays in `App.js`.
3. Navigate to [http://localhost:3000](http://localhost:3000) (or your configured port) to view the Meeting Room Scheduler.

## Components

- **App.js**
  - Fetches and parses the .ics file.
  - Manages state for meetings and background images.
  - Periodically updates meeting data and background images.

- **CurrentStatus.js**
  - Displays the current meeting details.
  - Shows a message if the meeting room is free.

- **UpcomingMeetings.js**
  - Lists upcoming meetings with their details.

## CSS

- **CurrentStatus.css**
  - Styles for the CurrentStatus component.

- **UpcomingMeetings.css**
  - Styles for the UpcomingMeetings component.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.
