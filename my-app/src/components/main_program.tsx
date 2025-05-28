import React from "react";
import { useState } from "react";

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
}