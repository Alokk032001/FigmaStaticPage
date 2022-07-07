import React from "react";
import "./SuggestedP.css";
import { ReactComponent as Alice } from "../../assets/profileAlice.svg";
import Card from "./Card";
const Cards = (props) => {
  return (
    <>
      <div className="row">
        <div className="card-one col-lg-4 col-md-8 col-xs-12">
          <Card
            name="Alice Martin"
            para="Design and develop a website for an educational platform focusing on the growth of children."
            time="5 Hours ago"
            lang="html"
            ethereum="1.2 ETH"
            bitcoin="0.3 BTC"
            dollar="$760"
            img={<Alice />}
          />
        </div>
        <div className="card-one col-lg-4 col-md-8 col-xs-12">
          <Card
            name="Alberto Donko"
            para="Copy
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            time="Yesterday, 9:40pm"
            lang="ruby"
            ethereum="3 ETH"
            bitcoin="1 BTC"
            dollar="$3360"
            img={<Alice />}
          />
        </div>
        <div className="card-one col-lg-4 col-md-8 col-xs-12">
          <Card
            name="Alexander Goe"
            para="Scrambled it to make a type specimen book. It has survived not only five centuries."
            lang="ruby"
            ethereum="1 ETH"
            bitcoin="0.2 BTC"
            dollar="$620"
            img={<Alice />}
            time="Yesterday, 2:00pm"
          />
        </div>
      </div>
    </>
  );
};

export default Cards;
