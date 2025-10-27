import React, { useState, useEffect } from "react";
import "../assets/styles/Comments_Users.css";

function CommentsUsers() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Variables de entorno
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
  const REPO_OWNER = process.env.REACT_APP_REPO_OWNER || "VargasAPI";
  const REPO_NAME = process.env.REACT_APP_REPO_NAME || "portfolio-comments";

  const API_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues`;

  // Cargar comentarios (issues)
  useEffect(() => {
    const loadComments = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github+json",
          },
        });
        if (!response.ok) throw new Error("Unable to load comments");

        const issues = await response.json();
        const formatted = issues.map((issue) => ({
          id: issue.number,
          name: issue.title,
          message: issue.body,
          date: new Date(issue.created_at).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        }));
        setComments(formatted);
      } catch (err) {
        console.error("Error loading comments:", err);
        setComments([
          {
            id: 1,
            name: "Demo User",
            message: "This is a demo comment (offline mode). Try again later.",
            date: new Date().toLocaleDateString("es-ES"),
          },
        ]);
      }
    };

    loadComments();
  }, [API_URL, GITHUB_TOKEN]);

  // Enviar comentario (crear issue)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.name.trim() || !newComment.message.trim()) {
      setError("Please complete all fields before submitting");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newComment.name,
          body: newComment.message,
          labels: ["comment"],
        }),
      });

      if (!response.ok) throw new Error("Error submitting comment");

      setSuccessMessage("Comment submitted successfully!");
      setNewComment({ name: "", message: "" });
      setTimeout(() => window.location.reload(), 1500);
    } catch (err) {
      setError("Error submitting comment. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Obtener iniciales para el avatar
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="contenedor">
      <div className="comments-container">
        <header className="comments-header">
          <button className="back-button" onClick={() => window.history.back()}>
            <span className="back-arrow">←</span>
            <span className="back-text">Back</span>
          </button>
          
          <h1>Comments</h1>
          <p className="comments-subtitle">
            Share your ideas, suggestions, or just say hi!
          </p>
        </header>

        <section className="comment-form-section">
          <h2>Leave a Comment</h2>
          <form onSubmit={handleSubmit} className="comment-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={newComment.name}
                onChange={(e) =>
                  setNewComment({ ...newComment, name: e.target.value })
                }
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Comment</label>
              <textarea
                id="message"
                name="message"
                placeholder="Share your thoughts..."
                value={newComment.message}
                onChange={(e) =>
                  setNewComment({ ...newComment, message: e.target.value })
                }
                required
              />
              <span className="char-count">
                {newComment.message.length} / 500
              </span>
            </div>

            {error && <p className="error-message">{error}</p>}
            {successMessage && (
              <div>
                <p className="success-message">{successMessage}</p>
                <div className="progress-bar-container">
                  <div className="progress-bar-fill"></div>
                </div>
              </div>
            )}

            <button type="submit" className="submit-button" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Comment"}
            </button>
          </form>
        </section>

        <section className="comments-list-section">
          <h2>
            Recent Comments <span className="comment-count">({comments.length})</span>
          </h2>

          {comments.length === 0 ? (
            <div className="no-comments">
              <p>No comments yet. Be the first to comment!</p>
            </div>
          ) : (
            <div className="comments-list">
              {comments.map((comment) => (
                <article key={comment.id} className="comment-item">
                  <div className="comment-header">
                    <div className="comment-avatar">
                      {getInitials(comment.name)}
                    </div>
                    <div className="comment-info">
                      <h3 className="comment-author">{comment.name}</h3>
                      <time className="comment-date">{comment.date}</time>
                    </div>
                  </div>
                  <p className="comment-message">{comment.message}</p>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default CommentsUsers;