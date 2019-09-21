import React, { Component } from 'react'
import './basic-collapse.scss';
import BaseIcon from '../baseIcon/BaseIcon';
import { plusCircle } from 'react-icons-kit/fa/plusCircle'
import { minusCircle } from 'react-icons-kit/fa/minusCircle'

class BasicCollapse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: !!this.props.defaultOpen
        };
        this.toggleShow = this.toggleShow.bind(this)
    }

    toggleShow() {
        this.setState(({ open }) => ({ open: !open }))
    }

    render() {
        const { header, children } = this.props;
        const { open } = this.state
        return (
            <div className={`basic-collapse ${open && "show"}`} >
                <div className="basic-collapse-toggle" onClick={this.toggleShow} >
                    <p className="basic-collapse-header" >
                        {header}
                    </p>
                    <div className="basic-collapse-icon">
                        {open ?
                            <BaseIcon size="md" color="#7b7b7b" icon={minusCircle} /> :
                            <BaseIcon size="md" color="#7b7b7b" icon={plusCircle} />
                        }
                    </div>
                </div>
                <div className="basic-collapse-body">
                    {children}
                </div>
            </div>
        )
    }
}



export default BasicCollapse