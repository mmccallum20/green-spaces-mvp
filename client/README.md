# green-spaces-mvp

MVP Project Description: Green Spaces App

Summary

Green Spaces App is an app that helps you plan your walking activities to local green spaces, especially during lockdown periods.

Motivation and Description

Over the past year, many governments worldwide instituted lockdowns for their citizens to prevent the spread of COVID-19. This has had a serious negative impact on the mental health of the general population, particularly those from lower socio-economic backgrounds. (<https://www.mind.org.uk/media-a/5929/the-mental-health-emergency_a4_final.pdf>).

In the UK currently, one of the few permitted recreational reasons to leave the house is to “exercise with your household (or support bubble) or one other person (in which case you should stay 2m apart). Exercise should be limited to once per day, and you should not travel outside your local area.” Source: <https://www.gov.uk/guidance/national-lockdown-stay-at-home#summary-what-you-can-and-cannot-do-during-the-national-lockdown>

It has been well documented that visiting green spaces can have a positive effect on mental health and reduce symptoms of anxiety, depression and hopelessness. (<https://www.kingsfund.org.uk/projects/improving-publics-health/access-green-and-open-spaces-and-role-leisure-services>)

Visiting local green spaces during lockdown have had a great positive effect on my mental health and have also led me to discover parts of my local area that I have never visited before e.g. The Regent’s Canal. This has inspired me to build an app that informs people of local green spaces in their area that they can visit easily, whilst respecting governmental lockdown restrictions.

Minimal Product

This section describes the minimal viable product that must be produced.

Features

• Allow users to enter their postcode into a search box
• From this postcode, produce: - a map of the local area with clickable markers showing a local green space - a clickable list highlighting at least one local green space available to visit with their distance from the entered postcode - a “featured” section – when a green space is clicked on the map or the list, the details of that green space shows up in this section of the page, with a short description

Design Overview

The app will consist of 2 pages:

1. A home page, which shows the App name and a welcome message, and a form where the postcode should be entered
2. A results page with a map, a list of green spaces and an area to show a featured green space

Technologies (TBC)
• React
• Bootstrap
• Ordnance Survey/Map API
• Postman

Roadmap

1. Create a simple welcome page for my app
2. Create a simple results page for my app with headings: ‘map’, ‘results list’ and ‘featured green space’
3. Create a fetch function that uses a map API to feed map information through to the results page – test this with Postman
4. Ensure that map data is being fed through correctly to results page
5. Add a marker to map for a featured green space and make sure it is showing up correctly
6. Make sure that the featured green space data is showing correctly in the list
7. Ensure that when the list item or marker is clicked on, the featured green space data shows up in the featured section
8. Add some Bootstrap features

Nice to Have Product

This section describes additional features that may be implemented, time permitting.

Features
Be able to list multiple green spaces from entering only one postcode – all being able to show up in the list and show in the featured section if clicked on
Be able to add a diary feature, so that walks can be scheduled for the future
Be able to add a local friend to your app
Be able to add that friend to a planned walk
Be able to track the number of steps completed using a pedometer

Technologies (TBC)
• A diary API (?)
• A pedometer API (?)
• React
• Bootstrap
• MySQL
• Postman

Roadmap

1. Ensure that current code allows for 3 locations to be listed on the results page, being clickable and listed properly in the green spaces list
2. Create a database to hold data for future walks eg date, time, destination
3. Integrate a diary app/API – not sure how to do this!
4. Make sure diary data is syncing correctly to database
5. Create a functioning form for “Schedule a walk”
6. Create a “Friends” database
7. Add a “Add a friend” form with the correct fields corresponding to the database fields
8. Make sure the friends data is being saved correctly in the database
9. Create a section on the page for friends, each with a button for “Add to a walk”
10. Create a “add to walk” form that displays data for a scheduled walk and allows you to add a friend.
