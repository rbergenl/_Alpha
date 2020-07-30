# nvm use && docker build --build-arg NODE_VERSION=$(node --version) --build-arg GITLAB_USERNAME=<username> --tag registry.gitlab.com/<groupname>/cicd .
# docker push registry.gitlab.com/<groupname>/cicd

FROM alpine:3.10.2

ARG NODE_VERSION
ARG GITLAB_USERNAME

RUN apk update && \
    apk add bash && \
    apk add curl && \
    apk add build-base && \
    apk add docker && \
    apk add git && \
    apk add jq && \
    apk add openssh-client && \
    apk add python3 && \
    apk add python3-dev && \
    apk add sed

RUN pip3 install --upgrade setuptools pip && \
    pip3 install awscli && \
    pip3 install aws-sam-cli

# Alternative way of installing Node on Alpine: https://github.com/nvm-sh/nvm/issues/1102#issuecomment-550572252
RUN curl -O https://unofficial-builds.nodejs.org/download/release/${NODE_VERSION}/node-${NODE_VERSION}-linux-x64-musl.tar.xz
RUN tar -xf node-${NODE_VERSION}-linux-x64-musl.tar.xz -C /usr/local --strip-components 1

# Installing global tools to be able to run before npm install
RUN npm install --global eslint \
       eslint-plugin-react \
       npm-audit-resolver \
       prettier

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
