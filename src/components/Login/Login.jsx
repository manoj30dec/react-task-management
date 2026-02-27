import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../context/useAuth";
import Loading from "../Loading/Loading";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/dashboard";

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        setLoading(true);
        try {
            const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || "Login failed");
            }

            if (data.access_token) {
                login(data.access_token);
                navigate(from, { replace: true });
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleInput = (event) => {
        if (event.target.name === "email") {
            setEmail(event.target.value);
        } else {
            setPassword(event.target.value);
        }
    };

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="login-wrapper">
                    <div className="login-container">
                        <div className="row login-card">
                            <div className="col-md-6 login-left">
                                {error ? <h1>{error}</h1> : ""}
                                <h2>Demo of useTransition</h2>
                                <h2>Welcome Back!</h2>
                                <p>
                                    Sign in to your account to continue accessing our platform and
                                    all its features. We're glad to have you back!
                                </p>

                                <div className="feature-list">
                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <i className="fas fa-shield-alt"></i>
                                        </div>
                                        <div>Secure & Encrypted Login</div>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <i className="fas fa-bolt"></i>
                                        </div>
                                        <div>Fast and Reliable Access</div>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <i className="fas fa-headset"></i>
                                        </div>
                                        <div>24/7 Customer Support</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 login-right">
                                {error && (
                                    <p
                                        style={{
                                            color: "red",
                                            textAlign: "center",
                                            fontSize: "22px",
                                        }}
                                    >
                                        {error}
                                    </p>
                                )}
                                <p>"username": john@mail.com</p>
                                <p>"password": changeme</p>
                                <h3>Sign In</h3>
                                <p className="subtitle">
                                    Enter your credentials to access your account
                                </p>

                                <form id="loginForm" onSubmit={handleSubmit} noValidate>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="name@example.com"
                                            value={email}
                                            name="email"
                                            onChange={handleInput}
                                        />
                                    </div>

                                    <div className="mb-3 position-relative">
                                        <label htmlFor="password" className="form-label">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            name="password"
                                            onChange={handleInput}
                                        />
                                        <span className="password-toggle" id="togglePassword">
                                            <i className="far fa-eye"></i>
                                        </span>
                                    </div>

                                    <button type="submit" className="btn btn-login mb-3">
                                        Login
                                    </button>

                                    <div className="forgot-password">
                                        <Link to={'#'} id="forgotPassword">
                                            Forgot your password?
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;