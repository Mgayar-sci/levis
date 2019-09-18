import React from 'react';
import data from '../../../data';
import './branches.scss';
import SimpleGrid from '../../common/simpleGrid/SimpleGrid';
import NavButton from '../../common/navButton/NavButton';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const BranchesList = data.branches.branches
    .map(({ route, label }) => <NavButton route={route} fullWidth >{label}</NavButton>);

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
                <Container className="branches-grid" >
                    <SimpleGrid
                        items={BranchesList}
                        rowProps={{
                            sm: 12,
                            md: 4
                        }}
                    />
                </Container>
                <NavLink to={data.branches.moreLink.route} className="more" >
                    {data.branches.moreLink.label}
                </NavLink>
            </div>
        </div>
    )
}

export default Branches;