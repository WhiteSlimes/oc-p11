import React from "react"
import Banner from "../../Components/Banner/Banner";
import Feature from "../../Components/Feature/Feature";
import "./HomeStyle.css"

import iconChat from "../../Assets/icon-chat.png";
import iconMoney from "../../Assets/icon-money.png";
import iconSecurity from "../../Assets/icon-security.png";

function Home(){
    return(

        <div>
            <Banner />
            <div className="Features">
                <Feature iconSrc={iconChat} iconAlt="Chat Icon" title="You are our #1 prority" description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." />
                <Feature iconSrc={iconMoney} iconAlt="Chat Icon" title="More savings means higher rates" description="The more you save with us, the higher your interest rate will be!" />
                <Feature iconSrc={iconSecurity} iconAlt="Chat Icon" title="Security you can trust" description="We use top of the line encryption to make sure your data and money is always safe." />
            </div>
        </div>
    );
}

export default Home