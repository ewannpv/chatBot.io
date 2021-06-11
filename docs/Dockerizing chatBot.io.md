# Dockerizing chatBot.io
This is the first 'devOps feature' we implemented in our project
- Adds a Dockerfile to our project.

# Adds unit tests
For unit tests and component rendering tests we have chosen Jest. Jest is a practical and easy to understand test library.

You can add your tests in src/tests/[your-test-file.test.js].

To run your test or to ensure your code, you can run the command before making any event:
- npm run jest

# Adds eslint test
ESLint statically analyzes your code to quickly find problems. ESLint fixes are syntax-aware so you won't experience errors introduced by traditional find-and-replace algorithms.

To ensure your code, you can run the command before making any event:
- npm run lint

# Adds a continuous integration pipeline
To implement our CI pipeline we choose to use GitHub actions that allow us to:
- run eslint test
- run unit tests
- build and push a Docker image to Docker Hub

This CI is triggered on push & pull requests.

# Add GitHub and Slack bots
- Enable communication between Discord and Slack to Github
-- use Discord webhooks and Slack repository subscription
-- receive all notifications from Github repository activity in a text channel

# Runing chatBot.io online
We decided to run our react app on a VPS. This allowed us to add new DevOps  features:
- daily cron script
- pull new docker image
- send GitHub notifications
- store logs about the docker image upade
- store logs about the server state

## web app: dev.ewannpv.com

## github: github.com/ewannpv/chatBot.io


