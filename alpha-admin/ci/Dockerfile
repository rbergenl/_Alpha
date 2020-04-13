# docker build -t registry.gitlab.com/<groupname>/<reponame> .
# docker push registry.gitlab.com/<groupname>/<reponame>

FROM alpine:3.10.2

RUN apk add python3 && \
    apk add python3-dev && \
    apk add docker && \
    apk add jq && \
    apk add sed && \
    apk add npm && \
    apk add build-base && \
    pip3 install --upgrade setuptools pip && \
    pip3 install awscli && \
    pip3 install aws-sam-cli

CMD /bin/bash
