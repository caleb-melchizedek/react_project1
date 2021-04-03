import React from 'react'

function projectDetails(props) {
    const id= props.match.params.id
    return (
        <div className=" container section  project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title-{id}</span>
                    <p>lorem </p>
                </div>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by Project Manager</div>
                <div>1st July, 5m</div>
            </div>
        </div>
    )
}

export default projectDetails
