import React from "react";
import Card from "./Card";

//This should contain: 
//-map to drill data into Card.js
class CardForm extends React.Component {
    render() {
        return( 
            <div className="cardForm">
                {this.props.users.map(user => (
                    <Card key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

export default CardForm;