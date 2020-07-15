# Setup Version Control System and Git Flow

- Make sure the repository is created in Gitlab.
- In the local repository folder:
    - Run `git remote add origin git@<username>.gitlab.com:<groupname>/<reponame>.git`
    - Run `git push --set-upstream origin master`.
    - Run `git checkout -b develop && git push --set-upstream origin develop`.
- Go to the repository in Gitlab and Settings > Repository:
    - Default Branch set to *Develop*.
    - Protected Branches make *Develop* protected with allowing merge and push (only maintainers).
    - Protected Branches make *Master* no one allowed to push (allowed to merge keep only maintainers).
- When merging from a feature branch to develop use in the commit message `Closes #1`. When it fixes an issue from Sentry also use `Fixes ADMIN-1`.
