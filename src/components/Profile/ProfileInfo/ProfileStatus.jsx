import React from 'react'

class ProfileStatus extends React.Component {

    state = {
        editState: false
    }

    activateEditMode() {
        this.setState({editState: true})
    }

    deactivateEditMode() {
        this.setState({editState: false})
    }

    render() {
        return (
            <>
                {
                    !this.state.editState &&
                    <div>
                         <span onDoubleClick={this.activateEditMode.bind(this)} >{props.status}</span>
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