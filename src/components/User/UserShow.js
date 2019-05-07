import React from 'react' 
import axios from 'axios'

//import PostList from '../posts/PostList' 
import Spinner from '../commons/Spinner'

class UserShow extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            post: {},
            isLoaded: false, 
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response => {
                this.setState(() => ({
                    post: response.data, 
                    isLoaded: true 
                }))
            })
        
    }
    render() {
        return(
            <div>
                { this.state.isLoaded ? (
                    <div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <h1>{this.state.post.title}</h1>
                                <p>
                                    { this.state.post.body }
                                </p>
                            </div> 
                        </div>
                    </div> 
                ) : <Spinner /> }
            </div>
        )
    }
}

export default UserShow