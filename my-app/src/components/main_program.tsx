import React from "react";
import { useState } from "react";
import BlitzBallMenu from "./menu";

export default function BlitzBallHomePage()
{
    const [current_view, set_current_view] = useState("home");

    const set_view_to_blitzball = () => 
    {
        set_current_view("blitzball");
    }

    const set_view_to_eboard = () => {
        set_current_view("eboard");
    }

    const set_view_to_baserun = () => 
    {
        set_current_view("baserun");
    }

    const set_view_to_home = () => 
    {
        set_current_view("home");
    }

    return (
        <div className="main_site">
            <BlitzBallMenu/>
        </div>
    );
}