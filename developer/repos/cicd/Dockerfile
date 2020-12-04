# nvm use && docker build --build-arg NODE_VERSION=$(node --version) --build-arg GITLAB_USERNAME=<username> --tag registry.gitlab.com/<groupname>/cicd .
# docker login registry.gitlab.com --username <username> --password-stdin < ~/.docker/<projectname>_gitlab
# docker push registry.gitlab.com/<groupname>/cicd
# docker image rm registry.gitlab.com/<groupname>/cicd
# docker run --detach --tty --volume /var/run/docker.sock:/var/run/docker.sock --name <groupname>-cicd registry.gitlab.com/<groupname>/cicd
# docker exec --interactive --tty <groupname>-cicd bash
# docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <groupname>-cicd

FROM alpine:3.10.2

ARG NODE_VERSION
ARG GITLAB_USERNAME

RUN apk update && apk add --no-cache \
    bash \
    nano \
    curl \
    wget \
    build-base \
    git \
    jq \
    sed \
    ca-certificates \
    openssl \
    openssh-client \
    docker-cli \
    python3 \
    python3-dev

RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
    unzip awscliv2.zip && \
    ./aws/install

# Alternative way of installing Node on Alpine: https://github.com/nvm-sh/nvm/issues/1102#issuecomment-550572252
RUN curl -O https://unofficial-builds.nodejs.org/download/release/${NODE_VERSION}/node-${NODE_VERSION}-linux-x64-musl.tar.xz
RUN tar -xf node-${NODE_VERSION}-linux-x64-musl.tar.xz -C /usr/local --strip-components 1

# Installing global tools to be able to run before npm install
RUN npm install --global eslint \
       eslint-plugin-react \
       @typescript-eslint/eslint-plugin \
       npm-audit-resolver \
       prettier \
       expo-cli

# Adding ssh config to be able to fetch private packages referenced in package.json
RUN mkdir -p ~/.ssh && \
    chmod 700 ~/.ssh && \
    ssh-keyscan gitlab.com >> ~/.ssh/known_hosts && \
    chmod 644 ~/.ssh/known_hosts && \
    echo "Host ${GITLAB_USERNAME}.gitlab.com" >> ~/.ssh/config && \
    echo -e "\tHostname gitlab.com" >> ~/.ssh/config && \
    echo -e "\tPreferredAuthentications publickey" >> ~/.ssh/config && \
    echo -e "\tIdentityFile ~/.ssh/id_rsa" >> ~/.ssh/config

RUN git config --global user.email "noreply@gitlab.com" && \
    git config --global user.name "Gitlab Builder"

CMD /bin/bash
