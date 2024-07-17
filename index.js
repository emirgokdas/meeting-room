// index.js

const ical = require('node-ical');
const axios = require('axios');

// URL of the .ics file
const icsUrl = 'https://outlook.office365.com/owa/calendar/b20f08db96a94310af0ab887899237a5@boyteks.com/8c98034279824045871ba948ce725ebb12655898264226879086/calendar.ics';

async function fetchAndParseIcs(url) {
  try {
    // Fetch the .ics file content
    const response = await axios.get(url);
    const icsData = response.data;

    // Parse the .ics file content
    const events = ical.parseICS(icsData);

    console.log("fasdfasdfasd")

    // Iterate over the events and log the required details
    for (let key in events) {
      const event = events[key];
      if (event.type === 'VEVENT') {
        console.log(`Title: ${event.summary}`);
        console.log(`Description: ${event.description}`);
        console.log(`Date-Time: ${event.start}`);
        console.log('--------------------');
      }
    }
  } catch (error) {
    console.error('Error fetching or parsing the .ics file:', error);
  }
}

// Fetch and parse the .ics file from the provided URL
fetchAndParseIcs(icsUrl);
