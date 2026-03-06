import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom"

export function AdminDashboard() {
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["adminToken"])
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(`${import.meta.env.VITE_APP_URL}/adminLogin`, {
        username: username,
        password: password
      })
      toast.success(response.data.message)
      setCookie("adminToken", response.data.jwt_token)
      navigate('/portal')
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Something went wrong, please try again")
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#0a0a0a",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      position: "relative",
      overflow: "hidden",
    },
    gridBg: {
      position: "absolute",
      inset: 0,
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
      pointerEvents: "none",
    },
    glowOrb: {
      position: "absolute",
      width: "600px",
      height: "600px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
    },
    card: {
      position: "relative",
      width: "100%",
      maxWidth: "420px",
      margin: "0 20px",
      animation: shake ? "shake 0.5s ease" : "fadeSlideUp 0.7s ease forwards",
    },
    topBar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "40px",
    },
    logoMark: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    logoSquare: {
      width: "28px",
      height: "28px",
      border: "1.5px solid #d4af37",
      transform: "rotate(45deg)",
      position: "relative",
    },
    logoSquareInner: {
      position: "absolute",
      inset: "5px",
      backgroundColor: "#d4af37",
      transform: "rotate(0deg)",
    },
    logoText: {
      color: "#d4af37",
      fontSize: "11px",
      letterSpacing: "0.3em",
      textTransform: "uppercase",
      fontFamily: "'Georgia', serif",
    },
    badgeTag: {
      backgroundColor: "transparent",
      border: "1px solid rgba(255,255,255,0.12)",
      color: "rgba(255,255,255,0.3)",
      fontSize: "9px",
      letterSpacing: "0.2em",
      padding: "4px 10px",
      textTransform: "uppercase",
    },
    dividerLine: {
      width: "100%",
      height: "1px",
      background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)",
      marginBottom: "40px",
    },
    heading: {
      color: "#ffffff",
      fontSize: "32px",
      fontWeight: "400",
      letterSpacing: "-0.02em",
      lineHeight: 1.1,
      marginBottom: "8px",
      fontStyle: "italic",
    },
    subheading: {
      color: "rgba(255,255,255,0.3)",
      fontSize: "12px",
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      marginBottom: "40px",
      fontFamily: "'Georgia', serif",
    },
    fieldGroup: {
      marginBottom: "20px",
    },
    label: {
      display: "block",
      color: "rgba(255,255,255,0.4)",
      fontSize: "9px",
      letterSpacing: "0.3em",
      textTransform: "uppercase",
      marginBottom: "10px",
      fontFamily: "'Georgia', serif",
    },
    inputWrapper: {
      position: "relative",
    },
    input: (isFocused) => ({
      width: "100%",
      backgroundColor: "transparent",
      border: "none",
      borderBottom: `1.5px solid ${isFocused ? "#d4af37" : "rgba(255,255,255,0.12)"}`,
      color: "#ffffff",
      fontSize: "16px",
      padding: "10px 0",
      outline: "none",
      fontFamily: "'Georgia', serif",
      letterSpacing: "0.05em",
      transition: "border-color 0.3s ease",
      boxSizing: "border-box",
    }),
    inputAccent: (isFocused) => ({
      position: "absolute",
      bottom: 0,
      left: 0,
      height: "1.5px",
      width: isFocused ? "100%" : "0%",
      backgroundColor: "#d4af37",
      transition: "width 0.4s ease",
    }),
    submitBtn: {
      width: "100%",
      padding: "16px",
      marginTop: "36px",
      backgroundColor: loading ? "transparent" : "#d4af37",
      border: "1.5px solid #d4af37",
      color: loading ? "#d4af37" : "#0a0a0a",
      fontSize: "11px",
      letterSpacing: "0.3em",
      textTransform: "uppercase",
      fontFamily: "'Georgia', serif",
      cursor: loading ? "not-allowed" : "pointer",
      transition: "all 0.3s ease",
      position: "relative",
      overflow: "hidden",
    },
    spinner: {
      display: "inline-block",
      width: "14px",
      height: "14px",
      border: "1.5px solid rgba(212,175,55,0.3)",
      borderTop: "1.5px solid #d4af37",
      borderRadius: "50%",
      animation: "spin 0.8s linear infinite",
      verticalAlign: "middle",
    },
    footer: {
      marginTop: "36px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    footerLink: {
      color: "rgba(255,255,255,0.2)",
      fontSize: "10px",
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      textDecoration: "none",
      cursor: "pointer",
      transition: "color 0.2s",
    },
    dot: {
      width: "4px",
      height: "4px",
      borderRadius: "50%",
      backgroundColor: "rgba(212,175,55,0.4)",
    },
  };

  return (
    <div style={styles.page}>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%       { transform: translateX(-8px); }
          40%       { transform: translateX(8px); }
          60%       { transform: translateX(-6px); }
          80%       { transform: translateX(6px); }
        }
        input::placeholder { color: rgba(255,255,255,0.15); }
        input[type="password"] { letter-spacing: 0.2em; }
        button:hover:not(:disabled) { background-color: transparent !important; color: #d4af37 !important; }
        a:hover { color: rgba(212,175,55,0.6) !important; }
      `}</style>

      <div style={styles.gridBg} />
      <div style={styles.glowOrb} />

      <div style={styles.card}>
        {/* Top bar */}
        <div style={styles.topBar}>
          <div style={styles.logoMark}>
            <div style={styles.logoSquare}>
              <div style={styles.logoSquareInner} />
            </div>
            <span style={styles.logoText}>Kraft Venture</span>
          </div>
          <div style={styles.badgeTag}>Admin</div>
        </div>

        {/* Gold divider */}
        <div style={styles.dividerLine} />

        {/* Heading */}
        <h1 style={styles.heading}>Welcome back.</h1>
        <p style={styles.subheading}>Restricted access — authorised personnel only</p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Username</label>
            <div style={styles.inputWrapper}>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setFocused("username")}
                onBlur={() => setFocused(null)}
                placeholder="Enter your username"
                style={styles.input(focused === "username")}
                autoComplete="username"
              />
            </div>
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.inputWrapper}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocused("password")}
                onBlur={() => setFocused(null)}
                placeholder="••••••••"
                style={styles.input(focused === "password")}
                autoComplete="current-password"
              />
            </div>
          </div>

          <button type="submit" disabled={loading} style={styles.submitBtn}>
            {loading ? (
              <span style={styles.spinner} />
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* Footer */}
        {/* <div style={styles.footer}>
          <a style={styles.footerLink}>Forgot password</a>
          <div style={styles.dot} />
          <a style={styles.footerLink}>Request access</a>
        </div> */}
      </div>
    </div>
  );
}