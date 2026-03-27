import { useState } from "react";

export default function Player({ intialName, playerSymbol, isActive }) {
    const [playerName, setPlayerName] = useState(intialName);
    const [isEditing, setIsEditing] = useState(false);

    let name = playerName;

    function handleEdit() {
        setIsEditing(editing => !editing)
    }

    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? "active" : ""}>
            <span className="player">
                {!isEditing ? <span className="player-name">{playerName}</span>
                    : <input type="text" defaultValue={name} onChange={handleChange} required></input>}
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}