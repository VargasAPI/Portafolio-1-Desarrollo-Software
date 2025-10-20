import React, { useState, useEffect } from "react";
import "../assets/styles/Comments_Users.css";

function Comments_Users() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [progress, setProgress] = useState(0);

  // GitHub configuration

  const GITHUB_CONFIG = {
    owner: "VargasAPI",
    repo: "portfolio-comments",
    token:
      "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",
  };
  // Carga comentarios al montar el componente
  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
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

      if (!response.ok) throw new Error("ERROR: Unable to load comments");

      const issues = await response.json();
      const formattedComments = issues.map((issue) => ({
        id: issue.number,
        name: issue.title,
        message: issue.body,
        date: new Date(issue.created_at).toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      }));

      setComments(formattedComments);
    } catch (err) {
      console.error("Error loading comments:", err);
      setComments([
        {
          id: 1,
          name: "Demo User",
          message:
            "This is a demo comment.Hi everyone! and welcome to the comments section.",
          date: new Date().toLocaleDateString("es-ES"),
        },
      ]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newComment.name.trim() || !newComment.message.trim()) {
      setError("Complete all fields before submitting");
      return;
    }

    if (newComment.message.length > 500) {
      setError("The message cant be longer than 500 characters");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);
    setProgress(0);

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
            title: newComment.name,
            body: newComment.message,
            labels: ["comment"],
          }),
        }
      );

      if (!response.ok) throw new Error("Error: Cant submit comment");

      // Mostrar mensaje de éxito
      setSuccessMessage(
        "Uploading comment. Please wait while its being processed… (max 1 minute)"
      );

      // Limpiar formulario
      setNewComment({ name: "", message: "" });

      // Barra de progreso (1 min)
      let duration = 100000; 
      let intervalTime = 500; // actualiza cada 0.5s
      let startTime = Date.now();

      const interval = setInterval(() => {
        let elapsed = Date.now() - startTime;
        let percentage = Math.min((elapsed / duration) * 100, 100);
        setProgress(percentage);

        if (percentage >= 100) {
          clearInterval(interval);
          window.location.reload(); // recarga al final
        }
      }, intervalTime);
    } catch (err) {
      setError("Error al enviar el comentario. Por favor intenta de nuevo.");
      console.error("Error submitting comment:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contenedor">
      <div className="comments-container">
        {/* Botón regresar */}
        <button className="back-button" onClick={() => window.history.back()}>
          <span className="back-arrow">←</span>
          <span className="back-text">Back</span>
        </button>

        <header className="comments-header">
          <h1>Comments</h1>
          <p className="comments-subtitle">
            Share your ideas, suggestions, or just say hi! I would love to hear from you.
          </p>
        </header>

        {/* Formulario para nuevo comentario */}
        <section className="comment-form-section">
          <h2>Write your comment</h2>
          <form onSubmit={handleSubmit} className="comment-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newComment.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                maxLength="50"
                required
              />
              <span className="char-count">{newComment.name.length}/50</span>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={newComment.message}
                onChange={handleInputChange}
                placeholder="Write your comment here..."
                maxLength="500"
                rows="5"
                required
              />
              <span className="char-count">{newComment.message.length}/500</span>
            </div>

            {error && <div className="error-message">{error}</div>}

            {successMessage && (
              <>
                <div className="success-message">{successMessage}</div>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </>
            )}

            <button type="submit" className="submit-button" disabled={isLoading}>
              {isLoading ? "Enviando..." : "Send Comment"}
            </button>
          </form>
        </section>

        {/* Lista de comentarios */}
        <section className="comments-list-section">
          <h2>
            Recent comments{" "}
            <span className="comment-count">({comments.length})</span>
          </h2>

          {comments.length === 0 ? (
            <div className="no-comments">
              <p>There’s no comments yet, be the first one to say hi!</p>
            </div>
          ) : (
            <div className="comments-list">
              {comments.map((comment) => (
                <article key={comment.id} className="comment-item">
                  <div className="comment-header">
                    <div className="comment-avatar">
                      {comment.name.charAt(0).toUpperCase()}
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

export default Comments_Users;
