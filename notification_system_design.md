# Notification System Design

## Overview

The goal of this task is to build a notification system that displays the most important notifications to the user. Notifications are prioritized based on their type and recency.

## Priority Logic

Each notification type is assigned a priority:

* Placement → Highest Priority
* Result → Medium Priority
* Event → Lowest Priority

This ensures that important placement opportunities are shown before results and general events.

## Approach

1. Fetch notifications from the Notifications API.
2. Assign a priority weight based on the notification type.
3. Sort notifications by:

   * Priority (highest first)
   * Timestamp (most recent first if priorities are the same)
4. Return the top N notifications.

## Example

If the system contains the following notifications:

* Placement: Microsoft Hiring
* Result: End Semester Results
* Event: Tech Fest

The notifications will be displayed in the following order:

1. Microsoft Hiring
2. End Semester Results
3. Tech Fest

## Time Complexity

The notifications are sorted before selecting the top N records.

* Sorting: O(n log n)
* Selecting Top N: O(n)

Overall complexity: O(n log n)

## Future Improvement

For a large-scale system with continuously incoming notifications, a Min Heap (Priority Queue) can be used to efficiently maintain the top N notifications.

This would reduce processing time and improve scalability.

## Logging

A reusable logging middleware is integrated into the application to record important operations such as API requests and notification processing. This helps in monitoring and debugging the application.

## Conclusion

The implemented solution prioritizes notifications based on importance and recency, ensuring that users see the most relevant updates first while maintaining a simple and efficient design.
