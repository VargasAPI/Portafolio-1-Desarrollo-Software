// api/comments.js

export default async function handler(req, res) {
  const GITHUB_TOKEN = process.env.VITE_GITHUB_TOKEN;
  const GITHUB_OWNER = "VargasAPI";
  const GITHUB_REPO = "portfolio-comments";

  if (req.method === "POST") {
    const { name, message } = req.body;

    if (!name || !message) {
      return res.status(400).json({ error: "Faltan campos requeridos" });
    }

    try {
      const response = await fetch(
        `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/issues`,
        {
          method: "POST",
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github+json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: name,
            body: message,
            labels: ["comment"],
          }),
        }
      );

      if (!response.ok) throw new Error("Error creando el issue");

      const data = await response.json();
      return res.status(200).json({ success: true, issue: data });
    } catch (error) {
      console.error(" Error:", error);
      return res.status(500).json({ error: "Error en el servidor" });
    }
  }

  if (req.method === "GET") {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/issues?state=open&labels=comment`,
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      );

      const issues = await response.json();
      return res.status(200).json(issues);
    } catch (error) {
      console.error(" Error obteniendo comentarios:", error);
      return res.status(500).json({ error: "Error al obtener comentarios" });
    }
  }

  res.status(405).json({ error: "Método no permitido" });
}
