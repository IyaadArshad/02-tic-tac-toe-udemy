import { useState } from "react";

export default function Player({ playerName, playerSymbol }) {

    const [isEditing, setIsEditing] = useState(false);

    function handleEdit() {
        if (isEditing)
            setIsEditing(false);
        else
            setIsEditing(true);
    }

    return (
        <li>
            <span className="player">
                {!isEditing ? <span className="player-name">{playerName}</span>
                    : <input type="text" required></input>}
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}