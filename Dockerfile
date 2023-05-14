FROM nginx:latest
ARG GITHUB_REPO
RUN apt-get install git
RUN apt-get update && apt-get install -y git
RUN git clone $GITHUB_REPO /usr/share/nginx/html
