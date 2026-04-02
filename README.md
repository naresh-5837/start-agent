# Zoho Start — LLC Formation Agent

AI-powered LLC formation assistant built with React + Vite and Claude API.

## Architecture

```
Browser → Slate (React frontend) → Catalyst Function (proxy) → Claude API
```

The frontend never touches the API key — all Claude API calls go through a secure server-side proxy.

## Setup

### 1. Deploy Frontend (Slate)
- Connect this repo to Catalyst Slate
- Framework: React/Vite
- Build command: `npm run build`
- Output path: `dist`

### 2. Deploy Backend (Catalyst Advanced I/O Function)
In the Catalyst Console:

1. Go to **Serverless → Functions → Create**
2. Select **Advanced I/O** function type
3. Name it `claude_proxy`
4. Choose **Node.js** runtime
5. Upload the contents of `functions/claude_proxy/`
6. Set environment variable: `ANTHROPIC_API_KEY` = your Claude API key
7. Deploy

### 3. Set Environment Variable
In Catalyst Console → Serverless → Functions → claude_proxy → Settings:
- Add `ANTHROPIC_API_KEY` with your Anthropic API key

## Tech Stack

- React 18 + Vite (frontend)
- Catalyst Advanced I/O Function + Express (backend proxy)
- Claude API (Sonnet 4 + Haiku 4.5)
