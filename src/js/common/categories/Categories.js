import React from 'react';
import SimpleGrid from '../simpleGrid/SimpleGrid';
import data from '../../../data';
import Categorycard from '../categoryCard/CategoryCard';

const CategoriesList = data.home.categories.map((i) => <Categorycard {...i} />)

const Categories = (props) => {
    return (
        <article className="py-5" >
            <SimpleGrid
                items={CategoriesList}
                colProps={{
                    sm: 12,
                    md: 4
                }}
            />
        </article>
    )
};

export default Categories;