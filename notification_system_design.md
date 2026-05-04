# Stage 1
## Problem Statement: We have to create an Priority Inbox for top 10 relevant notification based on the weight (Placement> Result> Event). Also we are provided with the data format where ( ID, type, message, timestamp) is given.

## Working :
# Fetch Notifications (using secured API) -> compute score for each Notification -> Get top 10 notification list -> continuously replacing the lower priority entries.

## Things taken care of :
# Even the highest priority with time loses it priority.
# The lowest priority changes when highest priority or same priority notification enters.
# I have take care that with Time Stamp and weight of the notification then the top 10 Notificastions compute. 

## Data Structure Used
# The solution is based on finding top n elements.
# where i have used the :-
#   - Bounded heap with size - 10;
#   - logic follows Min Heap where at every iteration lowest Priority notification is replaced with highest one.
#   - Used an Array.

## Logging
# I have taken care of API Interaction, possible failures and processing steps (Iterations).

## Run :- 
# npm install
# npm run dev