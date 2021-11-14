# Backend Setup

## Deploy on heroku

As the application is in a subfolder of the git repository, there are some extra steps needed:

1. Deploy the application on heroku with the web UI. The deploy is going to fail.

   1. Create new app
   2. Add name "js-advanced-twitter" and Region "Europe" and click "Create app"
   3. Choose deployment method "GitHub" and allow heroku to access the GitHub repository
   4. Search the repository and click "Connect"
   5. Enable automatic deploys
   6. Deploy the branch manually

2. Navigate into "Settings" and add the following two buildpacks in this order:

   - https://github.com/timanovsky/subdir-heroku-buildpack
   - heroku/nodejs

3. Also in "Settings" add the following config variable:

   - key: PROJECT_PATH
   - value: projects/frontend/backend

4. Navigate into "Deploy" and deploy the application again manually.
