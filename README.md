# Cinema Website Project (Endterm Web Application)

## Overview
This is an interactive multi-page responsive web application developed as an extension of the midterm project. The site allows users to browse movies, check ticket prices, view screening schedules, learn about cinema features, and book tickets online with rich client-side interactivity.

## Group Members
* **Student:** Nikolay Kozlov
* **Group:** SE-2529 (Astana IT University)

## Project Structure
The project consists of 5 connected pages:
1. **Home (`index.html`)**: Features trending movies loaded dynamically via JavaScript and main cinema highlights.
2. **About (`about.html`)**: Features dynamically generated lists of cinema features and technologies.
3. **Schedule (`schedule.html`)**: Displays movie times, screening halls, and ticket prices populated through an array and a rendering function.
4. **Movies (`movies.html`)**: Displays a full catalog of available movies rendered dynamically from a data array.
5. **Contact (`contact.html`)**: Contains an interactive ticket booking and contact form with custom JavaScript validation.

## Endterm Features & Technical Requirements Implemented
- **JavaScript Fundamentals**: Uses arrays (`movies`, `cinemaFeatures`, `scheduleData`), loops (`for`, `forEach`), and reusable functions (including parameter-based and value-returning functions like `calculateTotal`).
- **DOM Manipulation**: Dynamically creates, displays, and modifies elements (movie cards, table rows, feature lists) instead of hardcoding them in HTML.
- **Events & Interaction**: Utilizes `addEventListener`, `DOMContentLoaded`, and jQuery's `document.ready` with multiple event types (`click`, `submit`, `mouseenter`, `mouseleave`) and `preventDefault()`.
- **Form Validation**: Validates the contact/booking form (checking email length and `@` presence), displays field-specific error/success messages, and prevents submission on errors.
- **jQuery Integration**: Implements jQuery selectors, DOM traversal methods (`closest()`, `find()`), and smooth UI effects (`fadeIn()`, `slideUp()`).
- **Responsive Design**: Built using Bootstrap 5 grid system, Flexbox, and custom CSS styling.

## Instructions for Testing Interactive Functions
1. Open **`index.html`** in any modern web browser (or use Live Server in IDE).
2. Use the navigation bar to switch smoothly between all 5 pages.
3. On **Home** or **Movies**, click the **"Book Ticket"** button on any movie card to trigger the ticket amount prompt, calculate the total price, and test the jQuery `slideUp` animation.
4. Go to **Contact**, leave the email empty or invalid, click **"Confirm Booking"** to test custom error validation, then enter a valid email to test success feedback.
5. Open the browser console (`F12`) to verify that the application runs completely free of errors.

## Technologies Used
- HTML5 & CSS3 (Flexbox, Media Queries)
- Bootstrap 5
- Vanilla JavaScript (ES6)
- jQuery 3.7.1