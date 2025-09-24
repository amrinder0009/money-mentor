import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function LogoutButton() {
  const handleLogout = () => {
    signOut(auth);
    alert("Logged out!");
  };

  return <button onClick={handleLogout}>Log Out</button>;
}
