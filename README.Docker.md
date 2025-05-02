# How to start stack
You need Docker and Docker Compose installed.

**WARNING**: This Docker Compose stack will download and run code from these public GitHub repositories:

- https://github.com/RandomAPI/Randomuser.me-Node
- https://github.com/rockyliyanlok/nextjs-randomuser-graphql

New Classrooms did not write this code and cannot confirm it is free from bugs or malicious code.
We did a brief look through the files and didn't see anything suspicious but it was not a comprehensive
code review.

Assumes a bash or similar shell. Tested on an Ubuntu 24.04 machine.

Whererever you extracted these files, run
```
docker compose up --build -d
```

The GraphQL server should now be exposed on http://localhost:3211/api/graphql.
You can use this in place of https://nextjs-randomuser-graphql.vercel.app/api/graphql.