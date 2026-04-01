# Zoho Start — LLC Formation Agent

An AI-powered LLC formation assistant built with Claude API (Anthropic). Guides users through business formation education and step-by-step LLC registration via conversational chat.

## Features

- **Educational Mode** (Claude Sonnet) — answers questions about LLCs, EINs, registered agents, formation states, costs, and more
- **Registration Mode** (Claude Haiku) — collects all LLC formation details step by step through natural conversation
- **Smart Model Routing** — automatically switches between Sonnet (deeper answers) and Haiku (fast data collection)
- **Submit Flow** — review summary and submit application when complete

## Files

| File | Description |
|------|-------------|
| `index.html` | Standalone HTML version — open in any browser, no build needed |
| `zoho-start-agent.jsx` | React artifact for Claude.ai |
| `catalyst/` | Zoho Catalyst deployment package |

## Quick Start

### Option 1: Standalone (no build)
Just open `index.html` in your browser. It loads React + Babel from CDN and connects to the Claude API.

### Option 2: Zoho Catalyst Deployment
```bash
cd catalyst/zoho-catalyst-project/client/app
npm install
npm run build
cp -r build/* ../
cd ../..
# Deploy via Catalyst CLI or GitHub integration
```

## Tech Stack

- **Frontend**: React 18, Outfit + Newsreader fonts
- **AI**: Claude API (Sonnet 4 for education, Haiku 4.5 for registration)
- **Hosting**: Zoho Catalyst (optional)

## License

MIT
