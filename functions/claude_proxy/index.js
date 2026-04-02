"use strict";

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));

const ANTHROPIC_API_URL = "https://api.anthropic.com/v1/messages";

// The API key should be set as a Catalyst environment variable named ANTHROPIC_API_KEY
const getApiKey = () => {
  return process.env.ANTHROPIC_API_KEY || "";
};

app.post("/api/chat", async (req, res) => {
  const apiKey = getApiKey();
  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured" });
  }

  try {
    const { model, max_tokens, system, messages } = req.body;

    const response = await fetch(ANTHROPIC_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({ model, max_tokens, system, messages }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error("Proxy error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

module.exports = app;
