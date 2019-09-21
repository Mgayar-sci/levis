import React from 'react';
import data from '../../../data';
import './branches.scss';
import SimpleGrid from '../simpleGrid/SimpleGrid';
import NavButton from '../navButton/NavButton';
import { Container } from 'react-bootstrap';

const BranchesList = data.home.branches.branches
    .map(({ route, label }) => <NavButton route={route} fullWidth >{label}</NavButton>);

const Branches = () => {
    const style = {
        backgroundImage: `url(${data.home.branches.background})`,
    };

    return (
        <div style={style} className="branches" >
            <div className="overly" >
                <img src={data.home.branches.logo} className="logo" alt="logo" />
                <p className="header" >
                    {data.home.branches.header}
                </p>
                <p className="sub" >
                    {data.home.branches.sub}
                </p>
                <Container className="branches-grid" >
                    <SimpleGrid
                        items={BranchesList}
                        colProps={{
                            sm: 12,
                            md: 4
                        }}
                    />
                </Container>
                <NavButton variant="secondary" outlined to={data.home.branches.moreLink.route} >
                    {data.home.branches.moreLink.label}
                </NavButton>
            </div>
        </div>
    )
}

export default Branches;