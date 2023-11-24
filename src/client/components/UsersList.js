import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import mapStateToProps from 'react-redux/lib/connect/mapStateToProps'

class UsersList extends Component {
  componentDidMount () {
    // this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render () {
    <div>
      Here's a big list of users:
    </div>
  }
}

function mapState(state) {
  return { users: state.users };
}

export  default connect(mapStateToProps, { fetchUsers })(UsersList);