# Enable Version Control System and Git(Hub) Flow

> Libraries use Git Flow to manage multiple supported live versions.
> Applications use GitHub Flow to bring features quickly to production via Continuous Delivery.

- Make sure the repository is created in Gitlab.
- In the local repository folder:
    - Run `git remote add origin git@<username>.gitlab.com:<groupname>/<reponame>.git`
    - Run `git push --set-upstream origin master`.
    - Git Flow only: run `git checkout -b develop && git push --set-upstream origin develop`.
- Go to the repository in Gitlab and Settings > Repository:
    - Git Flow only: Default Branch set to *Develop*. Make sure *Auto-close referenced issues on default branch* is selected.
    - Git Flow only: Protected Branches make *Develop* protected with allowing merge and push (only maintainers).
    - Protected Branches make *Master* protected with allowing merge and push (only maintainers).
