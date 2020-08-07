# Developer

## Install Developer Tools

- Install Homebrew
  - Run `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`.
- Install via Homebrew
  - Git: `brew install git bash-completion`.
    - Run `nano ~/.bash_profile` and add `[[ -r "/usr/local/etc/profile.d/bash_completion.sh" ]] && . "/usr/local/etc/profile.d/bash_completion.sh"`.
  - [SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install-mac.html) - to invoka a lambda locally.
    - Run `brew tap aws/tap && brew install aws-sam-cli`.
  - Proxy: `brew install mitmproxy`.
  - Heroku: `brew install heroku/brew/heroku`
  - React-Native-Debugger: `brew cask install react-native-debugger`
  - Java: `` ?? **TODO:**
- Install via Gem
  - Cocoapods: `gem install cocoapods`
- Install Nvm
  - Run `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`.
- Install [Docker](https://docs.docker.com/docker-for-mac/install/)
- Install for NodeJs web development:
  - Visual Studio Code
  - Install Visual Studio Code plugins:
    - Apache Velocity
    - Apollo GraphQL
    - Docker
    - ESlint
    - GitLens
    - Markdown Preview Enhanced
    - Prettier - Code formatter
    - SQLite
    - Terminal
- Install Google Chrome extensions:
  - React Dev Tools
  - Redux Dev Tools
- Install for Java/Kotlin web development:
  - Intellij Community Edition
  - Install Intellij plugins:
    - Tomcat **?? TODO**
- Install for mobile app development:
  - Expo Client app via App/Play Store.
- Install for mobile app publishing:
  - Xcode (not via App Store but [here](https://developer.apple.com/download/more/))
  - Fastlane
  - Android SDK

## Initialize a NodeJS version

- In the project folder run `nvm install node && nvm alias default node && echo $(node -v) > .nvmrc`.
- When working on a repository in this project, always first run `nvm use`.

## Setup access to new Git Repository

- Run `ssh-keygen -t rsa -b 4096 -C "<GOOGLE_EMAIL>"`.
- Save it to path `/Users/<username>/.ssh/<projectname>_gitlab`.
- Run for both private and public key `chmod 0400 ~/.ssh/<ssh_key>`
- Add to `nano ~/.ssh/config` an entry (quit by _Ctrl X_ then _Y_ then _Enter_):
  ```bash
  # <Projectname> GitLab
  Host <username>.gitlab.com
      Hostname gitlab.com
      PreferredAuthentications publickey
      IdentityFile ~/.ssh/<private_ssh_key>
  ```
- Copy the public key in Gitlab > Settings > SSH Keys with `cat ~/.ssh/<projectname>_gitlab.pub | pbcopy`.
- Copy the private key in Gitlab > Group > Settings > CICD > Variables with name `SSH_GITLAB_KEY` and value `cat ~/.ssh/<projectname>_gitlab | base64 | pbcopy`. This is so it can be used in the `.gitlab-ci.yml` file to fetch the UI and Base git repos. Base64 encoding is used so that the *secret* variable can be masked.
- Create a file `nano .gitconfig` in the project folder:
  ```bash
  [user]
      name = <FIRST_NAME>
      email = <PROJECT_EMAIL>
  ```
- Edit the main `nano ~/.gitconfig` to include the config for this project.
  ```bash
  [includeIf "gitdir:~/<PATH_TO_PROJECT>/"]
  path = ~/<PATH_TO_PROJECT>/.gitconfig
  ```
- Run `git init && git config user.name && rm -r .git` to validate correct setup.

## Setup access to Heroku

- Run `heroku login` and login via the browser.
- Run `heroku authorizations:create --description=gitlab`.
- Copy/paste the token to *Gitlab > Group > Settings > CICD > Variables* and add the variable `HEROKU_TOKEN` and set the flag _Masked_.

## Setup integration between Sentry and Gitlab

- In Sentry create a project and follow the installation instructions.
- In *Settings > Account > Notifications* set _Weekly reports_ to _off_.
- Setup integration between Sentry and Gitlab. Make sure previously created Gitlab project is in a Group.
  - In Sentry go to *Settings > Integrations > Gitlab > New Installation*.
  - Follow the instructions.
- To mark an issue as resolved use in the commit message `Fixes ADMIN-1`.

## Setup a new Java/Kotlin project

- **TODO:**
  For Spring, always start here: https://start.spring.io/
  Then run `./gradlew run`
  Check /localhost:8080/
  Then run `./gradlew war`.
  Copy the war file to /Tomcat/webapps
  Run `tail -f logs/catalina.out`.
  Run `./bin/startup.sh`.
