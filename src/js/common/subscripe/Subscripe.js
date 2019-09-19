import React from 'react';
import { ic_chevron_right } from 'react-icons-kit/md/ic_chevron_right';
import InputAddon from '../InputAddon/InputAddon';
import './subscripe.scss';

const Subscripe = ({ title, body }) => {
    return (
        <div className="subscripe" >
            <p className="title">
                {title}
            </p>
            <p className="body">
                {body}
            </p>
            <div className="form" >
                <InputAddon
                    placeholder="email"
                    icon={ic_chevron_right}
                    inputClass="email"
                    btnClass="btn-email"
                    iconProps={{
                        color:"secondary",
                        size:"md"
                    }}
                />
            </div>
        </div>
    )
}

export default Subscripe;