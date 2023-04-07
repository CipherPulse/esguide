---
sidebar_position: 1
description: How to Set Up Nextcloud Using Docker Compose A Step-by-Step Guide
---
Nextcloud Using Docker Compose
==================================================================

This guide provides a step-by-step walkthrough on setting up Nextcloud using Docker Compose. Nextcloud is a self-hosted cloud storage solution that enables you to access and share your files securely. Docker Compose simplifies the deployment of multiple containers, making it easier to manage the entire Nextcloud stack.

Prerequisites
-------------

Before getting started, make sure you have the following tools installed on your system:

*   Docker: [Install Docker](https://docs.docker.com/get-docker/)
*   Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

Step 1: Create a Docker Compose file
------------------------------------

Create a new directory for your Nextcloud project and navigate to it in the terminal. Then, create a `docker-compose.yml` file with the following content:

yaml

```yaml
version: '3'

services:
  db:
    image: mariadb
    command: --transaction-isolation=READ-COMMITTED --binlog-format=ROW
    restart: always
    volumes:
      - db:/var/lib/mysql
    environment:
      - MYSQL_ROOT_PASSWORD=my-secret-pw
      - MYSQL_PASSWORD=my-secret-pw
      - MYSQL_DATABASE=nextcloud
      - MYSQL_USER=nextcloud

  app:
    image: nextcloud
    ports:
      - 8080:80
    links:
      - db
    volumes:
      - nextcloud:/var/www/html
    restart: always

volumes:
  db:
  nextcloud:
```

Make sure to replace `my-secret-pw` with a secure password for your database.

Step 2: Configure Nextcloud
---------------------------

Run the following command to start your Nextcloud instance:

bash

```bash
docker-compose up -d
```

Docker Compose will now create the necessary containers and configure Nextcloud. Once the process is complete, visit `http://localhost:8080` in your web browser to access the Nextcloud setup page.

Step 3: Complete the setup
--------------------------

On the Nextcloud setup page, create an admin account with a username and password. In the "Configure the database" section, select "MySQL/MariaDB" and enter the following information:

*   Database user: `nextcloud`
*   Database password: Use the password you specified in the `docker-compose.yml` file
*   Database name: `nextcloud`
*   Database host: `db`

Click the "Finish setup" button to complete the installation process.

Step 4: Secure your Nextcloud instance
--------------------------------------

To add an SSL certificate and enable HTTPS, you can use a reverse proxy, such as [Traefik](https://doc.traefik.io/traefik/) or [nginx-proxy](https://github.com/nginx-proxy/nginx-proxy). This will help you secure your Nextcloud instance and protect your data.

Conclusion
----------

You have now successfully set up Nextcloud using Docker Compose. You can easily manage your files and share them securely with your team or family. Additionally, you can explore the [Nextcloud app store](https://apps.nextcloud.com/) to extend the functionality of your Nextcloud instance.
