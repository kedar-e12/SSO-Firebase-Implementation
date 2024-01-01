import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { googleAuthProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("user details", auth?.currentUser);
  ///!We are using the async because firbease will return promises
  const handleLogin = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {}
  };
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {}
  };
  useEffect(() => {
    setEmail(auth?.currentUser?.email);
    setPassword(auth?.currentUser?.password);
  }, [auth]);
  return (
    <div>
      <p>Logged in user email {email}</p>
      <br />
      <p>Logged in user password {password}</p>
      <br />
      <img
        src={auth?.currentUser?.providerData[0]?.photoURL}
        alt="user profile pic"
      />
      <br />
      <input
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        placeholder="Enter password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={() => handleLogin()}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={() => handleGoogleSignIn()}>Sign in with google</button>
    </div>
  );
};
