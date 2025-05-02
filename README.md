# Random Users Generator

This is the take home project from New Classrooms. The prompt required I build a UI for an endpoint and display various statistics. It allows users to pick how many data points to calculate from and what nationality they may represent.

As it stands, this project meets the basic functionality but the data is being mocked so, there are limitations there.

## How to Run

After cloning, run `npm install` and `npm run relay`
To run it locally, run `npm start`. This will open up a page http://localhost:3000

## File Structure

src/  
├── components/ # UI: UserInputSection, UserStats…  
├── hooks/ # Custom hook, useUserStats  
├── queries/ # Relay GraphQL definitions  
├── relay/ # Environment & network setup  
└── styles/ # Global & module CSS

## Future Additions

- Create tests for each component
- Make data into "cards" where users can choose whether or not they want visualizations
- Allow additional filtering
- Allow users to add/remove what data they want seen with "checkbox" like system

## Issues

- `https://nextjs-randomuser-graphql.vercel.app/api/graphql` is down, spent time trying to find a way around. // Using provided fix.
- Installing relay gave issues since I am using latest React. Force installed it and hoping no issues. If issues pop up, will downgrade react version // downgraded react
- Mocked the data for nextjs and basic functionality is working now. just gotta add tests and what not. // app works now with mocked data, adjusting to use provided fix.
- Issues with using the provided fix with Docker // fixed
