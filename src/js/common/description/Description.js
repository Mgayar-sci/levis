import React from 'react'
import { Row, Col } from 'react-bootstrap';

import './description.scss';

export default function Description({ desc }) {
    return (
        <div className="description" >
            <Row>
                <Col>
                    <h3 className="desc" >
                        description
                </h3>
                    <p>
                        {desc}
                    </p>
                </Col>
                <Col>
                    <h3>
                        fit and sizing
                </h3>
                    <ul>
                        <li>
                            <p>
                                sadsa das dsa dasdas sadas dasd asdas dasdsadasd
                            </p>
                        </li>
                        <li>
                            <p>
                                sadsa das dsa dasdas sadas dasd asdas dasdsadasd
                            </p>
                        </li>
                        <li>
                            <p>
                                sadsa das dsa dasdas sadas dasd asdas dasdsadasd
                            </p>
                        </li>
                    </ul>
                </Col>
                <Col>
                    <h3>
                        material
                </h3>
                    <ul>
                        <li>
                            <p>
                                sadsa das dsa dasdas sadas dasd asdas dasdsadasd
                            </p>
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}

Description.defaultProps = {
    desc: "lorem ipsum dol filk jalli kolmoon dolkami nomm batg",

}