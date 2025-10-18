# Project Blueprint

## Overview

A simple single-page application (SPA) with a side navigation menu and a content area. The application is built with modern Angular (v20+), using standalone components, signals, and the new control flow syntax.

## Style, Design, and Features

*   **Architecture:** Standalone components, `OnPush` change detection.
*   **Routing:** Lazy-loaded routes for different sections of the app.
*   **UI:** A simple and clean user interface. A left-side navigation menu and a main content area.
    *   The navigation menu lists the available routes.
    *   The main content area displays the component for the currently active route.
*   **Styling:** Basic CSS for layout and styling. No complex design system.

## Current Request: Add Mock Data to All Resources Page

*   **Plan:** The user wants to populate the "All Resources" page with a significant amount of data to simulate a real-world scenario.
*   **Steps:**
    1.  Define a data structure (interface) for a "resource".
    2.  Generate an array of 100 mock resource objects.
    3.  Update the `all-resources` component's template to display the data in a table.
    4.  Rebuild the application.
