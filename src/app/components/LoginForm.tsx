"use client";

// ** React Imports
import React, { useState } from "react";

// ** Next Import
import { useRouter } from "next/navigation";

// ** Styles Import
import styles from "/public/styles/Login.module.scss";

// ** Third party Import
import Image from "next/image";
import lend from "/public/images/lend.jpeg";
import union from "/public/images/union.jpeg";
import pablo from "/public/images/pablo.jpeg";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ** Authentication logic 
    localStorage.setItem("user", JSON.stringify({ email }));
    router.push("/dashboard");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onBlur = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftPanel}>
        
        {/* Left Panel Content */}
        <Image src={union} alt="Login Logo" className={styles.union} />
        <Image src={lend} alt="Login Illustration" className={styles.lend} />
        <Image src={pablo} alt="Login Image" className={styles.pablo} />
      </div>

      {/* Right Panel Content - Login Form */}
      <div className={styles.rightPanel}>
        <h1>Welcome!</h1>
        <p>Enter details to login</p>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onBlur={onBlur}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
          {emailError && <span className={styles.error}>{emailError}</span>}

          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
            <a
              type="button"
              className={styles.togglePassword}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </a>
          </div>
          <a href="/">Forgot Password?</a>

          <button type="submit">LOG IN</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
