import React from 'react';
import SimpleGrid from '../../common/simpleGrid/SimpleGrid';
import data from '../../../data';
import Categorycard from '../../common/categoryCard/CategoryCard';

const CategoriesList = data.categories.map((i) => <Categorycard {...i} />)

const Categories = (props) => {
    return (
        <div className="py-5" >
            <SimpleGrid
                items={CategoriesList}
                rowProps={{
                    sm: 12,
                    md: 4
                }}
            />
        </div>
    )
};

export default Categories;