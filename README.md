# Random Users Generator

This is the take home project from New Classrooms. The prompt required I build a UI for an endpoint and display various statistics. It allows users to pick how many data points to calculate from and what nationality they may represent.

As it stands, this project meets the basic functionality but the data is being mocked so, there are limitations there.

## How to Run

After cloning, run `npm install` and `npm run relay`
To run it locally, run `npm start`. This will open up a page http://localhost:3000

## File Structure

src/
├── components/ # UI: UserInput, UserStats…
├── queries/ # Relay GraphQL definitions
├── relay/ # Environment & network setup
└── styles/ # Global & module CSS

## Need to do

- Move inline styles to css
- Change default react css
- Change logo in tab
- Write tests
- Add visualization
- Style page
- Organize files

## Issues so Far

- `https://nextjs-randomuser-graphql.vercel.app/api/graphql` is down, spent time trying to find a way around
- Installing relay gave issues since I am using latest React. Force installed it and hoping no issues. If issues pop up, will downgrade react version
- Mocked the data for nextjs and basic functionality is working now. just gotta add tests and what not.
