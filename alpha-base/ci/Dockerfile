# docker build -t registry.gitlab.com/<groupname>/<reponame> .
# docker push registry.gitlab.com/<groupname>/<reponame>

FROM alpine:3.10.2

ENV GITLAB_USERNAME <username>

RUN apk update && \
    apk add build-base && \
    apk add docker && \
    apk add git && \
    apk add jq && \
    apk add npm && \
    apk add openssh-client && \
    apk add python3 && \
    apk add python3-dev && \
    apk add sed

RUN pip3 install --upgrade setuptools pip && \
    pip3 install awscli && \
    pip3 install aws-sam-cli

RUN npm install -g create-react-app \
    npm-audit-resolver

RUN mkdir -p ~/.ssh && \
    chmod 700 ~/.ssh && \
    ssh-keyscan gitlab.com >> ~/.ssh/known_hosts && \
    chmod 644 ~/.ssh/known_hosts && \
    echo "Host $GITLAB_USERNAME.gitlab.com" >> ~/.ssh/config && \
    echo "\tHostname gitlab.com" >> ~/.ssh/config

RUN git config --global user.email "noreply@gitlab.com" && \
    git config --global user.name "Gitlab Builder"

CMD /bin/bash
