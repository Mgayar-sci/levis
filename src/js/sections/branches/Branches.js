import React from 'react';
import data from '../../../data';
import './branches.scss';

const Branches = () => {
    const style = {
        backgroundImage: `url(${data.branches.background})`,
    };
    return (
        <div style={style} className="branches" >
            <div className="overly" >
                <img src={data.branches.logo} className="logo" />
                <p className="header" >
                    {data.branches.header}
                </p>
                <p className="sub" >
                    {data.branches.sub}
                </p>
                <a href={data.branches.moreLink.href} className="more" >
                    {data.branches.moreLink.label}
                </a>
            </div>
        </div>
    )
}

export default Branches;