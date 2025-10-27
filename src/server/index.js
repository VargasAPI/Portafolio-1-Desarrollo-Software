import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const GITHUB_CONFIG = {
  owner: "VargasAPI",
  repo: "portfolio-comments",
  token: process.env.GITHUB_TOKEN,
};

//Obtenemos comentarios
app.get("/api/comments", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/issues?state=open&labels=comment`,
      {
        headers: {
          Authorization: `token ${GITHUB_CONFIG.token}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    const issues = await response.json();
    res.json(issues);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ message: "Error fetching comments" });
  }
});

//Creamos nuevo comentario
app.post("/api/comments", async (req, res) => {
  const { name, message } = req.body;

  if (!name || !message)
    return res.status(400).json({ message: "Missing name or message" });

  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/issues`,
      {
        method: "POST",
        headers: {
          Authorization: `token ${GITHUB_CONFIG.token}`,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: name,
          body: message,
          labels: ["comment"],
        }),
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error posting comment:", error);
    res.status(500).json({ message: "Error posting comment" });
  }
});

// servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
