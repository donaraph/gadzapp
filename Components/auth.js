import { auth } from "../Config/firebase";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useState } from "React";

export const auth = () => {
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");

    const signIn = () => {}
    return (
        <div>
            <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
    )
}