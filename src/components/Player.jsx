import { useState } from "react";

export default function Player({ initialName, playerSymbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEdit() {
        setIsEditing(editing => !editing);

        if (isEditing) {
            onChangeName(playerSymbol, playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? "active" : ""}>
            <span className="player">
                {!isEditing ? <span className="player-name">{playerName}</span>
                    : <input type="text" value={playerName} onChange={handleChange} required></input>}
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}