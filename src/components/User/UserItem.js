import React from 'react'
import { Link } from 'react-router-dom'
const UserItem = (props) => {
    const {id,name,username} = props
    return (
                <div className="col-md-4">
                    <div className="card-deck mb-3">
                        <div className="card">
                            <img src="https://via.placeholder.com/100x50" className="card-img-top" alt="..." /> 
                                <div className="card-body">
                                    <h5 className="card-title text-center" > {name} </h5>
                                </div>
                                 <div className="card-footer">
                                    <p className="text-muted text-center">{ username }</p>
                                </div>
                        </div>
                    </div>
                </div>
    )
}

export default UserItem