## Assumptions made

- Registrations are separated from the car information, but are joined many-to-one

## Project Setup

### Overview

This project is composed of the following stack:

- MySQL (through Docker)
- TypeORM
- TypeScript
- Node.js
- Express
- routing-controllers

### Prerequisites

- Docker
  - [General install](https://docs.docker.com/get-docker/)
  - [homebrew](https://formulae.brew.sh/cask/docker)

- yarn
  - [General install](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
  - [homebrew](https://formulae.brew.sh/formula/yarn)

### Getting Started

To bring up the environment, perform the following steps:

1. Bring up the MySQL database

    ```bash
    # In the project root directory
    docker compose up
    # Exposes database on port 3306
    ```

2. Bring up express server in development mode

    ```bash
    # In a separate terminal session
    yarn dev
    # Exposes express app on port 8889
    ```
3. Test the api using the following postman documentation

    [List a car Postman documentation](https://documenter.getpostman.com/view/3813285/UzBiR9ST)
3. To generate a valid VIN for testing

    [Generate VIN](https://vingenerator.org/)
