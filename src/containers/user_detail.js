import React, {Component} from 'react'
import {connect} from 'react-redux'

class UserDetail extends Component {
    render () {
        const {myActiveUser} = this.props;
        if (!myActiveUser){
            return <div>Selectionnez un utilisateur</div>
        }
        return (
            <div>
                <h3>Détail de {myActiveUser.name}</h3>
                <ul>
                    <li>ID: {myActiveUser.id}</li>
                    <li>Role: {myActiveUser.role}</li>
                    <li>Actif: {is_active(myActiveUser.active)}</li>
                </ul>
            </div>
        )
    }
}

function is_active(bool){
    if (bool)
        return ("OUI");
    else
        return ("NON");
}

function mapStateToProps(state){
    return {
        myActiveUser : state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail)