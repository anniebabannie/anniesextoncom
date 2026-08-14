# Build the static site. `dist` is gitignored, so it has to be produced here
# rather than copied in — CI checkouts never have one.
FROM node:20-alpine AS build
WORKDIR /app

# Deps first: this layer stays cached until the lockfile changes.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Serve it.
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
