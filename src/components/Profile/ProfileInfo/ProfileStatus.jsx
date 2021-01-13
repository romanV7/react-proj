import React from 'react'

class ProfileStatus extends React.Component {

    state = {
        editState: false
    }

    render() {
        return (
            <>
                {
                    !this.state.editState &&
                    <div>
                         <span>{props.status}</span>
                    </div>
                }
                {
                    this.state.editState &&
                    <div>
                        <input value={props.status} />
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus