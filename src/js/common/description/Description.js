import React from 'react'
import SimpleGrid from '../simpleGrid/SimpleGrid';

import './description.scss';

export default function Description({ data }) {
    return (
        <div className="description" >
            <SimpleGrid
                items={data}
                colProps={{
                    sm: 4
                }}
                Component={({ title, text }) => {
                    switch (typeof text) {
                        case "string":
                            return (
                                <>
                                    <h3>
                                        {title}
                                    </h3>
                                    <p>
                                        {text}
                                    </p>
                                </>
                            )

                        default:
                            return (
                                <>
                                    <h3>
                                        {title}
                                    </h3>
                                    <ul>
                                        {
                                            text.map((t) => (
                                                <li>
                                                    <p>
                                                        {t}
                                                    </p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </>
                            )
                    }
                }}
            />
        </div>
    )
}

