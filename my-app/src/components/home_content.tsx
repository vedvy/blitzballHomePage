import React from "react";
import blitzballlogo from "./otherblitzballimage.jpg";
import instagramlogo from "../images/InstaLogo.jpg";
import groupmelogo from "../images/groupmelogo.jpeg"

export default function MainHomePage()
{
    return (
        <div className={"homePage"}>
            <div className="homeTitle">
                <img src={blitzballlogo} alt="BlitzBall not loading" height={50} width={60} style={{float: "left", marginLeft: "30px"}}/>
                <img src={blitzballlogo} alt="BlitzBall not loading" height={50} width={60} style={{float: "right", marginRight: "30px"}}/>
                <h1>Welcome to Stony Brook's Official Blitzball Club!</h1>
                
            </div>

            <div className="homeMainContent">
                <div className="aboutContent">
                    <h2>What is Blitzball?</h2>
                    <p>Figure out how to explain it later. blah blah blah</p>
                    <br/>

                </div>

                <div className="socialsContent">
                    <h2>Follow us on Instagram!</h2>
                    <a href="https://stonybrook.campuslabs.com/engage/organization/blitzballclub" target="blank">Click this link to join the club on SBEngaged!</a>
                    <p>This way you can stay up to date on the latest news for Stony Brook's Blitzball Club!</p>
                    <p>Check out the GroupMe in the Insta bio to collaborate and talk with other Blitzball members!</p>
                    <a href="https://www.instagram.com/" target="blank"><img src={instagramlogo} width={150} height={100} /></a>
                    <a href="https://www.groupme.com/" target="blank"><img src={groupmelogo} width={150} height={100} style={{marginLeft: "70px"}}/></a>
                    
                </div>
            </div>
            
            <div className="siteContent">
                <h2>Click on the menu buttons above to view either our current eBoard or the rules for Blitzball and Base Running!</h2>
                <br/>
                <h2>Current Updates: </h2>
                <p>No Updates for now, enjoy your summer!</p>
            </div>

            <div className="footer">
                <p>Stony Brook BlitzBall Club, Last Updated: 2025</p>
            </div>
        </div>
    )
}