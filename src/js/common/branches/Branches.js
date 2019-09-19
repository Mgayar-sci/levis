import React from 'react';
import data from '../../../data';
import './branches.scss';
import SimpleGrid from '../simpleGrid/SimpleGrid';
import NavButton from '../navButton/NavButton';
import { Container } from 'react-bootstrap';

const BranchesList = data.branches.branches
    .map(({ route, label }) => <NavButton route={route} fullWidth >{label}</NavButton>);

const Branches = () => {
    const style = {
        backgroundImage: `url(${data.branches.background})`,
    };

    return (
        <div style={style} className="branches" >
            <div className="overly" >
                <img src={data.branches.logo} className="logo" alt="logo" />
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
                <NavButton variant="secondary" outlined to={data.branches.moreLink.route} >
                    {data.branches.moreLink.label}
                </NavButton>
            </div>
        </div>
    )
}

export default Branches;