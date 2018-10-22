import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {selectUser} from '../actions/index'

class UserList extends Component {
	render () {
		return (
			<div>
				<ul className="col-md-4">
					{
						this.props.myUsers.map((i_user) => {
							return (
								<li className="list-group-item" key={i_user.id} onClick={
								() => this.props.mySelectedUser(i_user)} >
									{i_user.name}
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		myUsers : state.users
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({mySelectedUser : selectUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
