import React from "react";

//This should contain: 
//-JSX for each card. 
class Card extends React.Component {
    //consider destructuring props?
    render() {
        return(
            <div className="card">
                <img 
                    src={this.props.user.avatar_url}
                    alt={`${this.props.user.name}'s avatar.`}
                />
                <div className="cardInfo">
                    <h2>{this.props.user.name}</h2>
                    <p>Username: {this.props.user.login}</p>
                    <p>Location: {this.props.user.location}</p>
                    <p>Followers: {this.props.user.followers}</p>
                    <p>Bio: {this.props.user.bio}</p>
                </div>
            </div>
        )
    }
};

export default Card;