# Setup Version Control System and Git Flow

- Make sure the repository is created in Gitlab.
- In the local repository folder:
    - Run `git remote add origin git@<username>.gitlab.com:<groupname>/<reponame>.git`
    - Run `git push --set-upstream origin master`.
    - Run `git checkout -b develop && git push --set-upstream origin develop`.
- Go to the repository in Gitlab and Settings > Repository:
    - Default Branch set to *Develop*. Make sure *Auto-close referenced issues on default branch* is selected.
    - Protected Branches make *Develop* protected with allowing merge and push (only maintainers).
    - Protected Branches make *Master* protected with allowing merge and push (only maintainers).
- When merging from a feature branch to develop use in the Pull request description the text `Closes #1`. When it fixes an issue from Sentry also use `Fixes ADMIN-1`. You can close this issue manually by clicking the *Close issue* button.
