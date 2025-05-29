import React from "react";
import { useState } from "react";
import BlitzBallMenu from "./menu";
import MainHomePage from "./home_content";
import EBoardPage from "./eboard";
import BlitzBallPage from "./blitzball";
import BaseRunPage from "./baserun";

export default function BlitzBallHomePage()
{
    type View = "home" | "blitzball" | "eboard" | "baserun";

    

    const [current_view, set_current_view] = useState<View>("home");

    const set_view_to_blitzball = () => 
    {
        set_current_view("blitzball");
    }

    const set_view_to_eboard = () =>
    {
        console.log("Clicking on eboard");
        set_current_view("eboard");
    }
    
    

    const set_view_to_baserun = () => {
        set_current_view("baserun");
    }

    const set_view_to_home = () =>
    {
        console.log("Clicking home");
       return set_current_view("home");
    }
    
    

    return (
        <div className="BB_site">
            <BlitzBallMenu
            home_view={set_view_to_home}
            eboard_view={set_view_to_eboard}
            blitzball_view={set_view_to_blitzball}
            baserun_view={set_view_to_baserun}
            />
            <div className="main_content">
                {current_view === "home" && (
              <MainHomePage/>  
            )}    
            {current_view === "eboard" && (
                <EBoardPage/>
            )}
            {current_view === "blitzball" && (
                <BlitzBallPage/>
            )}
            {current_view === "baserun" && (
                <BaseRunPage/>
            )}
            </div>

            
        </div>
    );
}