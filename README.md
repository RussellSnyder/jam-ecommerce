# jam-ecommerce

Commerce Layer + React + Gatsby + Contentful + Netlify = JAM-Stack E-commerce

This is a tutorial and template for anybody interested in building a jam-stack e-commerce website.
If you just want to use it, copy the final folder and go to town!
Follow along the text tutorial to build it out yourself :-)

## Overview

### Step 1 - MVP

- Set up Commerce layer.  We'll use the test data generated when you make an account (Tee Cyan Brand)
- Make first api call in React and render data to home page.

### Step 2 - Move to build time and make it static

- Set up Backend for Frontend (BFF) architecture using Node at build time to fetch and parse data
- Enrich and parse information the client needs
- Use .env files to secure secrets adding security and better CD later

### Step 3 - Enrich content and start CI/CD

- Set up Contentful for general page data
- Integrate Commerce Layer into Contentful for "Seasonal Favorites"
- Deploy to Netlify
- Add build hooks to Contentful to rebuild every publish 

### Step 4 - Build basket and checkout to have first sales!

- Website ready for first sale!
