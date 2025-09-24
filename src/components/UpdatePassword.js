import { useState } from "react";
import { updatePassword } from "firebase/auth";
import { auth } from "../firebase";

export default function UpdatePassword() {
  const [newPass, setNewPass] = useState("");

  const handleUpdate = async () => {
    try {
      await updatePassword(auth.currentUser, newPass);
      alert("Password updated!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Update Password</h2>
      <input type="password" placeholder="New Password" onChange={(e) => setNewPass(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
