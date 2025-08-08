import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SecurityQuestion = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  const email = sessionStorage.getItem("resetEmail");

  useEffect(() => {
    if (!email) return;

    const fetchQuestion = async () => {
      try {
        const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}/security-question`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        const data = await resp.json();
        if (resp.ok) {
          setQuestion(data.question);
        } else {
          setError(data.msg || "Could not load security question.");
        }
      } catch (err) {
        setError("Server error loading question.");
      }
    };

    fetchQuestion();
  }, [email]);

  const submitAnswer = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}/verify-answer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, answer }),
      });

      const data = await resp.json();

      if (resp.ok) {
        navigate("/newpassword"); 
      } else {
        setError(data.msg);
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          paddingTop: "100px",
          boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.5)", // dark overlay
        }}
      > 
    <div className="container bg-white shadow p-4 rounded"
			style={{ maxWidth: "500px" }}>
    <h2 text-center mb-4>Reset password</h2>
    <form className="mb-3" onSubmit={submitAnswer}>
      <label className="form-label">{question}</label>
      <input
        type="text"
        className="form-control"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        required
      />
      {error && <div className="text-danger mt-2">{error}</div>}
      <button type="submit" className="btn btn-primary mt-2">
        Answer
      </button>
    </form></div></div>
  );
};
