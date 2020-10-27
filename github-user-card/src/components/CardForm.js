import React from "react";
import Card from "./Card";

//This should contain: 
//-map to drill data into Card.js
class CardForm extends React.Component {
    render() {
        return( 
            <div className="cardForm">
                <Card />
            </div>
        )
    }
}

export default CardForm;