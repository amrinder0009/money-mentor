import { setPersistence, browserLocalPersistence } from "firebase/auth";
import { auth } from "./firebase";

setPersistence(auth, browserLocalPersistence);
