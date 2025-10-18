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

## Current Request: Implement Page Content

*   **Plan:** The user has pointed out that the pages are empty. The plan is to add unique content to each page to demonstrate that the routing is working correctly.
*   **Steps:**
    1.  Add a unique heading and paragraph to each of the 11 page components.
    2.  Rebuild the application to apply the changes.
    3.  Deploy the application for review.
