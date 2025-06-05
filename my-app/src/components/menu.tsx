import React from "react";

interface MenuProps{
    home_view: () => void;
    eboard_view: () => void;
    blitzball_view: () => void;
    baserun_view: () => void;
}

const BlitzBallMenu : React.FC<MenuProps> = ({ home_view, eboard_view, blitzball_view, baserun_view }) => {
   console.log(home_view);
    return (
        <div>
            <div className="menuBar">
            <span className="menuBarItems" onClick={() => {home_view()}}>Home</span>
            <span className="menuBarItems" onClick={() => {eboard_view()}}>Our EBoard</span>
            <span className="menuBarItems" onClick={() => {blitzball_view()}}>Blitzball Rules</span>
            <span className="menuBarItems" onClick={() => {baserun_view()}}>Base Running</span>
        </div>
        
        </div>
        
    )
}


export default BlitzBallMenu;