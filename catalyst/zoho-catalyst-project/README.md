# Zoho Start Agent — Deploy to Zoho Catalyst

## Prerequisites

1. A Zoho Catalyst account → https://catalyst.zoho.com
2. Catalyst CLI installed:
   ```
   npm install -g zcatalyst-cli
   ```
3. Node.js 16+ installed

---

## Deployment Steps

### Option A: Deploy via Catalyst CLI

1. **Login to Catalyst CLI**
   ```
   catalyst login
   ```

2. **Link to your Catalyst project**
   ```
   cd zoho-catalyst-project
   catalyst init
   ```
   Select your existing project or create a new one.

3. **Build the React app**
   ```
   cd client/app
   npm install
   npm run build
   ```

4. **Copy build output to client root**
   ```
   cp -r build/* ../
   ```
   (The Catalyst client directory needs the built files at the `client/` root level)

5. **Deploy to Catalyst**
   ```
   cd ../..
   catalyst deploy
   ```
   Select "client" when prompted for which resources to deploy.

6. **Access your app**
   After deployment, Catalyst provides a URL like:
   ```
   https://your-project-name-XXXXXX.development.catalystserverless.com/app/
   ```

7. **Deploy to Production**
   Once tested, go to Catalyst Console → Deploy → Promote to Production.

---

### Option B: Deploy via GitHub Integration

1. Push this project to a GitHub repository

2. In Catalyst Console:
   - Go to your project → Hosting → Web Client
   - Click "Deploy from GitHub"
   - Connect your GitHub account
   - Select the repository
   - Set build command: `cd client/app && npm install && npm run build`
   - Set output directory: `client/app/build`
   - Deploy

---

### Option C: Deploy via Slate (Recommended for React)

Slate is Catalyst's frontend hosting service with native React support:

1. In Catalyst Console → Slate → Create new app
2. Connect your GitHub repo
3. Framework: React
4. Build command: `cd client/app && npm install && npm run build`
5. Output directory: `client/app/build`
6. Deploy

Slate provides automatic deployments on git push and preview URLs for branches.

---

## Project Structure

```
zoho-catalyst-project/
├── catalyst.json              # Catalyst project config
├── client/
│   ├── client-package.json    # Client metadata
│   └── app/
│       ├── package.json       # React app dependencies
│       ├── public/
│       │   └── index.html     # HTML template
│       └── src/
│           ├── index.js       # React entry point
│           └── App.js         # Main agent component
└── README.md
```

## Notes

- The app calls the Anthropic Claude API directly from the browser.
- For production, consider proxying API calls through a Catalyst Function (serverless) to keep the API key secure.
- The app uses two Claude models: Haiku (fast, for registration) and Sonnet (thorough, for education).
