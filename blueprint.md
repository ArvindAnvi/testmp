# Project Blueprint

## Overview

This document outlines the plan for resolving the scrolling issue in the application. The previous approach of making small, incremental changes has been unsuccessful. This new plan involves a radical simplification of the application to its bare essentials, followed by a methodical, step-by-step rebuild. This will allow for the precise identification of the root cause of the scrolling issue.

## Phase 1: Radical Simplification

1.  **Strip `app.component.ts`:** Remove all existing components and styles from `app.component.ts`.
2.  **Create a Minimal Scrolling Container:** In `app.component.ts`, create a simple `div` with a fixed height and `overflow-y: auto`.
3.  **Add Content:** Populate the `div` with enough content to force a scrollbar to appear.
4.  **Build and Verify:** Compile the application and confirm that the scrollbar is visible and functional.

## Phase 2: Incremental Rebuild

1.  **Re-introduce `app-layout.component.ts`:** Add the `app-layout` component back into `app.component.ts`, but with a simplified template and minimal styles.
2.  **Test Scrolling:** Verify that the scrollbar still functions as expected.
3.  **Re-introduce `nav-menu.component.ts`:** Add the `nav-menu` component into `app-layout.component.ts`, again with a simplified template and styles.
4.  **Test Scrolling:** Verify that the scrollbar still functions as expected.
5.  **Iteratively Add Styles:** One by one, re-introduce the original styles to `app-layout.component.ts` and `nav-menu.component.ts`, testing the scrollbar after each change.
6.  **Isolate the Culprit:** This iterative process will reveal the exact style or combination of styles that is causing the scrolling issue.

## Phase 3: Final Solution

1.  **Implement a Robust Fix:** Once the problematic style is identified, implement a permanent and reliable solution. This may involve using `calc()`, flexbox, or other CSS techniques to ensure proper height calculation.
2.  **Restore Original Functionality:** Restore all original components and styles, ensuring that the application is fully functional and visually identical to the original design.
3.  **Final Verification:** Perform a final build and thorough testing to confirm that the scrolling issue is resolved and that no new issues have been introduced.