# Firestore Credentials

Place your Google Cloud service account JSON key here.

## How to get the credentials:

1. Go to https://console.cloud.google.com/
2. Create a project or select existing one
3. Enable Firestore API: APIs & Services → Library → Search "Cloud Firestore API" → Enable
4. Create Firestore database: Firestore → Create Database → Native mode → Choose region (europe-central2 for Poland)
5. Create service account: IAM & Admin → Service Accounts → Create Service Account
   - Name: selectcentre-backend
   - Role: Cloud Datastore User
6. Generate key: Click on the service account → Keys → Add Key → Create new key → JSON
7. Save the downloaded file here as `service-account.json`

⚠️ NEVER commit this file to git!
