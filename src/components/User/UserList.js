import React from 'react' 
import axios from 'axios'
import UserItem from './UserItem';
import Spinner from '../commons/Spinner'

class UserList extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            users: [],
            isLoaded: false 
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState(() => ({ 
                    users: response.data, 
                    isLoaded: true 
                }))
            })
    }

    render(){
        return (
            <div>
                <h2>Users Page</h2>
                
                    <div>
                        {
                            this.state.isLoaded ? (
                                <div className="row">
                                    { this.state.users.map(user => {
                                        return (
                                            <UserItem
                                                key={user.id}
                                                name={user.name}
                                                username={user.username}
                                            />    
                                        )
                                    })}
                                </div>
                                ) : <Spinner />
                        }
                    </div>
               
            </div>
        )
    }
}

export default UserList