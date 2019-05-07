import React from 'react'

const CommentItem = (props) => {
    return (
        <div className="card mb-2">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-2">
                        <img src="https://via.placeholder.com/75x75"  className="rounded-circle" alt={props.email}/>
                    </div>
                    <div className="col-md-10">
                        <h5 className="card-title">{props.name} </h5>
                        <h6 className="card-subtitle mb-2 text-muted"> {props.email} </h6>
                        <p className="card-text">{props.body} </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}   

export default CommentItem