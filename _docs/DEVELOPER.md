# Developer

## Install Developer Tools
- Homebrew
- Install via Homebrew
    - Git
    - Nvm? Docker?
- Visual Studio Code
- Install Visual Studio Code plugins:
    - Apache Velocity
    - Docker
    - ESlint
    - GitLens
    - GraphQL
    - Markdown Preview Enhanced
    - Prettier - Code formatter
    - SQLite
    - Terminal
- Install Nvm
- Instal global NodeJS packages:
    - `npm install -g create-react-app`.
    - `npm install -g expo-cli`.
    - `npm install -g aws-cdk`.
    - `npm install -g gatsby-cli`.
- Install Docker
- Install the `Expo Client` app on your mobile phone.
- Install Google Chrome extensions:
    - React Dev Tools
    - Redux Dev Tools

## Initialize a NodeJS version
- In the project folder run `nvm install node && nvm alias default node && echo $(node -v) > .nvmrc`.
- When working on a repository in this project, always first run `nvm use`.

## Setup access to new Git Repository
- Run `ssh-keygen -t rsa -b 4096 -C "<GOOGLE_EMAIL>"`.
- Save it to path `~/.ssh/<projectname>_gitlab`.
- Run for both private and public key `chmod 0400 ~/.ssh/<ssh_key>`
- Add to `~/.ssh/config` an entry:
    ```bash
    # <Projectname> GitLab
    Host <username>.gitlab.com
        Hostname gitlab.com
        PreferredAuthentications publickey
        IdentityFile ~/.ssh/<private_ssh_key>
    ```
- Copy the public key into the SSH setting in Gitlab.
- Copy the private key in Gitlab > Settings > CICD > Variables with name `SSH_GITLAB_KEY` and value `cat ~/.ssh/<projectname>_gitlab | pbcopy`. This is so it can be used in the `.gitlab-ci.yml` file to fetch the UI and Base git repos.
- Create a file `.gitconfig` in the project folder:
    ```bash
    [user]
        name = <NAME>
        email = <EMAIL>
    ```
- Edit the main `~/.gitconfig` to include the config for this project.
    ```bash
    [includeIf "gitdir:~/<PATH_TO_PROJECT>/"]
    path = ~/<PATH_TO_PROJECT>/.gitconfig
    ```

### Setup access to new Docker Registry
- In Settings > Personal Access Token, create a new with the name `Docker` and the scope `api`. Save the token in a file `~/.docker/<projectname>_gitlab.
- Run `docker login registry.gitlab.com --username <username> --password-stdin < ~/.docker/<projectname>_gitlab`.

### Setup integration between Sentry and Gitlab
- In Sentry create a project and follow the installation instructions.
- Setup integration between Sentry and Gitlab. Make sure previously created Gitlab project is in a Group.
    - In Sentry go to Settings > Integrations > Gitlab > New Installation.
    - Follow the instructions.
- To mark an issue as resolved use in the commit message `Fixes ADMIN-1`.
