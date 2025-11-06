# FluxEmail v2 🚀

> A lightweight, blazing-fast unified inbox for Gmail and Outlook. Inspired by [Zero](https://0.email/) but without the AI bloat.

## ✨ Features

- 📧 **Unified Inbox** - Gmail + Outlook in one place
- ⚡ **Blazing Fast** - Loads in < 2s (vs Zero's 5-10s)
- 🧵 **Thread Grouping** - Just like Gmail
- 🔄 **Auto Sync** - Real-time updates every 5 minutes
- 🎨 **Clean UI** - Zero's beautiful design, properly implemented
- 🔐 **Secure** - JWT auth + OAuth2 for Gmail/Outlook
- 📦 **Self-Hosted** - Your data, your server
- 🚫 **No AI** - No slow LLM processing or bloat

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/Ct1869/Claude-Email.git
cd Claude-Email

# Install dependencies
pnpm install

# Start PostgreSQL
pnpm docker:db:up

# Setup environment variables
cp .env.example .env
# Edit .env with your credentials

# Initialize database
pnpm db:push

# Start development servers
pnpm dev:full
```

Visit http://localhost:5177 and login with:
- Email: `demo@flux.email`
- Password: `fluxpass`

For detailed setup instructions, see [SETUP.md](./SETUP.md)
