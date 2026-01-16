#!/bin/bash
# Production Server Setup Script for SelectCentre
# Run this on your production server once

set -e

echo "🚀 Setting up SelectCentre production environment..."

# Create directory
sudo mkdir -p /opt/selectcentre
cd /opt/selectcentre

# Copy docker-compose.prod.yml (you'll need to transfer this file)
echo "📦 Please copy docker-compose.prod.yml and credentials/ to /opt/selectcentre"

# Login to GitHub Container Registry
echo "🔐 Logging in to GitHub Container Registry..."
echo "Run: echo \$GITHUB_TOKEN | docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin"

# Create credentials directory
mkdir -p credentials
echo "📝 Place your service-account.json in /opt/selectcentre/credentials/"

# Set environment variable for repo
echo "Set GITHUB_REPOSITORY environment variable:"
echo "export GITHUB_REPOSITORY=yourusername/selectcentre-v2"

# Pull and start
echo ""
echo "When ready, run:"
echo "  cd /opt/selectcentre"
echo "  export GITHUB_REPOSITORY=yourusername/selectcentre-v2"
echo "  docker compose -f docker-compose.prod.yml pull"
echo "  docker compose -f docker-compose.prod.yml up -d"
echo ""
echo "✅ Setup instructions complete!"
