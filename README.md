# team_workflow_front_end
Your Turn :: Team Workflow

Though there are a lot of different potential Git workflows for teams, for your third project, we'd like you to take the following approach:

"Single remote repo" (in your case, one for the back-end and one for the front-end), managed by the whole team.

Feature branching, with all branches merged into a development branch. The development branch should be fairly clean, mostly consisting of merges from feature branches. If there are issues with features integrating cleanly, you should create a separate branch off of development and perform the integration there - when finished, you merge these new branches back into development.

If this were a professional software project, you might also use these branches as release branches, representing complete and fully-functioning "release versions" of a piece of software. Once a release branch is complete, it might get merged with master and "released" into the world for people to use.
When the development branch is functional, merge it into master. Barring extraordinary circumstances, these merges should be the only commits on the master branch.

For the back-end repo, master will used for deployment to Heroku; for the front-end repo, you'll be using the gh-pages branch for deployment, so merge master into gh-pages when you're ready to deploy.
If you use rebase, use it only on your personal clone of the repo, and only on code that you personally have written. Never, ever rebase published code.

To practice this workflow, your team will now follow it to create a simple front-end app that (in response to a button-click) uses AJAX to retrieve (i.e. GET) data from this API and renders the data nicely using Handlebars. Much like the actual front-end repo you make, this repo will need a gh-pages branch for deployment.

Make commits regularly, in case you need to undo a mistake!
