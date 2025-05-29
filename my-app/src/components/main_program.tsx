import React from "react";
import { useState } from "react";
import BlitzBallMenu from "./menu";
import MainHomePage from "./home_content";
import EBoardPage from "./eboard";

export default function BlitzBallHomePage()
{
    type View = "home" | "blitzball" | "eboard" | "baserun";

    

    const [current_view, set_current_view] = useState<View>("home");

    const set_view_to_blitzball = ((e: React.ChangeEvent<HTMLElement>) => 
    {
        set_current_view("blitzball");
    });

    const set_view_to_eboard = ((e: React.ChangeEvent<HTMLElement>) =>
    {
        console.log("Clicking on eboard");
        set_current_view("eboard");
    }
    );
    

    const set_view_to_baserun = ((e: React.ChangeEvent<HTMLElement>) => {
        set_current_view("baserun");
    }); 

    const set_view_to_home = ((e: React.ChangeEvent<HTMLElement>) =>
    {
        console.log("Clicking home");
       return set_current_view("home");
    }
    );
    

    return (
        <div className="BB_site">
            <BlitzBallMenu
            home_view={set_view_to_home}
            eboard_view={set_view_to_eboard}
            />
            <div className="main_content">
                {current_view === "home" && (
              <MainHomePage/>  
            )}    
            {current_view === "eboard" && (
                <EBoardPage/>
            )}
            </div>

            
        </div>
    );
}