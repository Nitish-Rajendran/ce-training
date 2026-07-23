# Notes

## package.json

- name – project name
- version – project version
- description – project description
- main – entry file
- scripts – commands that can be run using npm
- author – developer name
- license – project license

## npm scripts

They provide shortcuts so developers don't need to remember long commands.

## dependencies

Packages required for running the application.

## devDependencies

Packages needed only during development (example: nodemon).

## package-lock.json

Stores the exact versions of installed packages so everyone gets the same versions.

## npm install vs npm ci

npm install installs or updates packages.

npm ci installs exactly what is listed in package-lock.json and is mainly used in CI/CD pipelines.