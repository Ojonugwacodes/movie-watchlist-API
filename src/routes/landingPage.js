import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(`
    <h1>🎬 Movie Watchlist API</h1>
    <p>Welcome! Explore our collection of movies and manage your watchlist with ease.</p>
    
    <h3>📚 API Documentation</h3>
    <a href="/api-docs">View API Docs</a>
  `);
});

export default router;