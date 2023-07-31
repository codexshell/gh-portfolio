FROM  node:alpine as build
WORKDIR /app
COPY package*.json yarn.*lock ./
RUN yarn install
COPY . .
RUN yarn prerender

FROM busybox:latest

# Create a non-root user to own the files and run our server
RUN adduser -D static
WORKDIR /home/static

# Copy the static website
COPY --from=build app/dist/gh-portfolio/browser/ .

# Run BusyBox httpd
CMD [ "busybox", "httpd", "-f", "-v", "-p", "80" ]