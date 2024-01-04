import { useState } from "react";

type ChangeProfileProps = {
    updateUsername: (newUsername: string) => void
}

export default function ChangeProfile({updateUsername}: ChangeProfileProps) {
    const [newUsername, updateNewUsername] = useState('');
    return (
        <div>
            <input type="text"
            value={newUsername}
             onChange={(e) => updateNewUsername(e.target.value)}/>
            <button onClick={() => updateUsername(newUsername)}>Update Username</button>
        </div>
    );
}