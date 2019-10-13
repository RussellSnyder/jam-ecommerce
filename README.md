# jam-ecommerce

Commerce Layer + React + Gatsby + Contentful + Netlify = JAM-Stack E-commerce

JAM-stack is an eloquent and modern way to build small to medium sized static websites with dynamic content.

*You do not need to spend any money to use this project or complete this tutorial*

This is a tutorial and template for anybody interested in building an e-commerce site using the JAM-stack.
If you just want to use it, copy the src/final folder and go to town!
If you want to learn how I built this project, I've broken the steps down in the src file with indicidual README.md files.

If you are having trouble, please make a error report.
If you have a better way of writing or explaing something, please make a PR.


## Overview

### Step 1 - CommerceLayer and React - minimal viable product

- Set up Commerce layer.  We'll use the test data generated when you make an account (Tee Cyan Brand)
- Make first api call in React and render data to home page.

### Step 2 - Node and Gatsby - move to data fetch to build time and make it static

- Set up Backend for Frontend (BFF) architecture using Node at build time to fetch and parse data
- Enrich and parse information the client needs
- Use .env files to secure secrets adding security and better CD later

### Step 3 - Contentful and Netlify - enrich content and deploy using CI/CD

- Set up Contentful for general page data
- Integrate Commerce Layer into Contentful for "Seasonal Favorites"
- Deploy to Netlify
- Add build hooks to Contentful to rebuild every publish 

### Step 4 - Basket and Checkout - get the first sales!

- Website ready for first sale!
