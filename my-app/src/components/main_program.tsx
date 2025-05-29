import React from "react";
import { useState } from "react";
import BlitzBallMenu from "./menu";
import MainHomePage from "./home_content";

export default function BlitzBallHomePage()
{
    type View = "home" | "blitzball" | "eboard" | "baserun";

    interface buttonProp {
        onClick: (event: Event) => void;
    }

    const [current_view, set_current_view] = useState<View>("home");

    const set_view_to_blitzball = ((e: buttonProp) => 
    {
        set_current_view("blitzball");
    });

    const set_view_to_eboard = ((e: buttonProp) =>
    {
        set_current_view("eboard");
    }
    );
    

    const set_view_to_baserun = ((e: buttonProp) => {
        set_current_view("baserun");
    }); 

    const set_view_to_home = ((e: buttonProp) =>
    {
        set_current_view("home");
    }
    );
    

    return (
        <div className="BB_site">
            <BlitzBallMenu
            
            />
            <div className="main_content">
                {current_view === "home" && (
              <MainHomePage/>  
            )}    
            </div>
            
        </div>
    );
}