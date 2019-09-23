import React, { Component } from 'react'
import BaseIcon from '../baseIcon/BaseIcon';
import { ic_search } from 'react-icons-kit/md/ic_search';
import { ic_close } from 'react-icons-kit/md/ic_close';
import InputAddon from '../InputAddon/InputAddon';

import './input-with-icon.scss';

export default class InputWithIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleIconClick = this.handleIconClick.bind(this)
    }

    handleOpen(open) {
        this.setState({ open })
    }

    handleIconClick() {
        this.handleOpen(true);
        window.scrollTo({
            top: 0
        })
    }

    render() {
        const { open } = this.state
        return (
            <div className="input-with-icon" >
                <BaseIcon
                    color="primary"
                    icon={ic_search}
                    size="md"
                    onClick={this.handleIconClick}
                />
                {open && <div className="input-container" >
                    <InputAddon
                        icon={ic_close}
                        placeholder="search"
                        iconProps={{
                            onClick: () => this.handleOpen(false),
                            size:"sm"
                        }}
                        btnClass="btn-white"
                        inputClass="input-search"
                    />
                </div>}
            </div>
        )
    }
}

