FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json ./
RUN yarn install --network-timeout 1000000

COPY . .

# Build with browserslist env to avoid parent package.json lookup issues
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN BROWSERSLIST_DISABLE_CACHE=1 \
    BROWSERSLIST=">0.2%, not dead, not op_mini all" \
    yarn build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
