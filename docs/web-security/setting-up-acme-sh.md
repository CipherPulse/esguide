---
sidebar_position: 1
---
# Setting up Acme.sh

This guide will help you set up Acme.sh with Cloudflare DNS verification for your domain.

## Step 1: Acme.sh Installation

1. Connect to your server via SSH.
2. Use the command below to install Acme.sh:

    ```bash
    curl https://get.acme.sh | sh
    ```
3. Restart your terminal or run:

    ```bash
    source ~/.bashrc
    ```
   
This will ensure that the `acme.sh` command is available in your shell.

## Step 2: Preparing Cloudflare API Credentials

1. Log in to your Cloudflare account and navigate to the API Tokens page: [https://dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens)
2. Click "Create Token" and use the "Edit zone DNS" template.
3. Select the specific zone (domain) for which you want to issue the certificate.
4. Set the Permissions to "Zone:DNS:Edit" and click "Continue to summary."
5. Review the settings and click "Create Token."
6. Copy the generated API token.
7. SSH into your server and run the following commands to export the required environment variables:

    ```bash
    export CF_Token="your_cloudflare_api_token"
    export CF_Email="your_cloudflare_account_email"
    ```

Replace `your_cloudflare_api_token` with the API token you copied, and `your_cloudflare_account_email` with the email address associated with your Cloudflare account.

## Step 3: Obtain the Certificate

1. Execute the command below to get a certificate using Cloudflare DNS verification:

    ```bash
    acme.sh --issue --dns dns_cf -d example.com -d *.example.com
    ```

Replace `example.com` with your domain.

2. Acme.sh will complete the Cloudflare DNS verification and provide the certificate.

## Step 4: Implement the Certificate

1. To apply the obtained certificate for a specific service, execute:

    ```bash
    acme.sh --install-cert -d example.com
     --cert-file /path/to/cert.pem 
     --key-file /path/to/key.pem 
     --fullchain-file /path/to/fullchain.pem 
     --reloadcmd "service <SERVICE_IDENTIFIER> reload"
    ```

Replace `/path/to/cert.pem`, `/path/to/key.pem`, and `/path/to/fullchain.pem` with your preferred certificate file paths, and `<SERVICE_IDENTIFIER>` with the service that needs the certificate (e.g., `nginx`, `apache`, `haproxy`).

2. This command also configures automatic certificate renewal.

## Step 5: Confirm Certificate Implementation

1. Confirm the successful certificate implementation by visiting your domain using HTTPS. You should see a secure connection with a valid certificate.

Great job! You have now set up Acme.sh with Cloudflare DNS verification for your domain.




