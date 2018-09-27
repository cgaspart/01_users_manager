import React, {Component} from 'react'
import {connect} from 'react-redux'

class UserList extends Component {
	render () {
		return (
			<div>
				<ul className="col-md-4">
					{
						this.props.myUsers.map((i_user) => {
							return (
								<li className="list-group-item" key={i_user.id}>
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

export default connect(mapStateToProps)(UserList)
