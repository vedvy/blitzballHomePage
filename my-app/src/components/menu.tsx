import React from "react";

interface MenuProps{
    home_view: (e: React.ChangeEvent<HTMLElement>) => void;
    eboard_view: (e: React.ChangeEvent<HTMLElement>) => void;
}

const BlitzBallMenu : React.FC<MenuProps> = ({ home_view, eboard_view }) => {
   console.log(home_view);
    return (
        <div className="menuBar">
            <span className="menuBarItems" onClick={() => home_view}>Home</span>
            <span className="menuBarItems" onClick={() => eboard_view}>Our EBoard</span>
            <span className="menuBarItems">Blitzball Rules</span>
            <span className="menuBarItems">Base Running</span>
        </div>
    )
}


export default BlitzBallMenu;