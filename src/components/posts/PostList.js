import React from 'react' 
import axios from 'axios'
import PostItem from './PostItem'

class PostList extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            posts: [],
            isLoaded: false 
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState(() => ({ 
                    posts: response.data, 
                    isLoaded: true 
                }))
            })
    }

    render(){
        return (
            <div>
                <h2>Post Page</h2>
                <div className="row">
                    <div className="col-md-8">
                    {
                        this.state.isLoaded ? (
                            <div>
                                { this.state.posts.map(post => {
                                    return (
                                        <PostItem key={post.id} id={post.id} title={post.title} body={post.body} />
                                    )
                                })}
                            </div>
                            ) : (
                                <div className="spinner-border">
                                    
                                </div>
                            ) 
                    }
                        
                    </div>

                    <div className="col-md-4">
                        recent posts
                    </div>
                </div>
            </div>
        )
    }
}

export default PostList