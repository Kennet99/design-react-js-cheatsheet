#!/bin/bash

# React JS Cheatsheet Deployment Script
# This script helps you deploy your cheatsheet to various platforms

echo "🚀 React JS Cheatsheet Deployment Helper"
echo "========================================"

# Build the project
echo "📦 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🌐 Deployment Options:"
    echo "1. GitHub Pages (Free)"
    echo "2. Netlify (Free)"
    echo "3. Vercel (Free)"
    echo "4. Just build (no deploy)"
    echo ""
    read -p "Choose an option (1-4): " choice

    case $choice in
        1)
            echo "📤 Deploying to GitHub Pages..."
            npx gh-pages -d dist
            echo "✅ Deployed! Your site will be available at:"
            echo "   https://yourusername.github.io/react-js-cheatsheet/"
            ;;
        2)
            echo "📤 Deploying to Netlify..."
            echo "   Please drag and drop the 'dist' folder to Netlify"
            echo "   Or run: npx netlify deploy --dir=dist --prod"
            ;;
        3)
            echo "📤 Deploying to Vercel..."
            npx vercel --prod
            ;;
        4)
            echo "📁 Build complete! Files are in the 'dist' folder"
            echo "   You can manually upload these files to any hosting service"
            ;;
        *)
            echo "❌ Invalid option"
            ;;
    esac
else
    echo "❌ Build failed! Please check for errors."
    exit 1
fi 