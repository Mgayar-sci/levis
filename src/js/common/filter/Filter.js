import React from 'react';
import './filter.scss';
import BaseIcon from '../baseIcon/BaseIcon';
import { ic_close } from 'react-icons-kit/md/ic_close';
import { ic_filter_list } from 'react-icons-kit/md/ic_filter_list'
import TagsArea from '../tagsArea/TagsArea';

export default class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    componentDidUpdate() {
        const displayTagsNo = this.props.tagsGroup.map(({ parent, tags }) => tags).reduce((acc, i) => acc + i.length, 0);
        if (displayTagsNo < 3 && this.state.show) {
            this.setState({ show: false })
        }
    }

    handleShow() {
        this.setState({ show: true })
    }

    handleHide() {
        this.setState({ show: false })
    }


    render() {
        const { tagsGroup, clearItem, clearAll } = this.props;
        const { state: { show }, handleHide, handleShow } = this
        const displayTagsNo = tagsGroup.map(({ parent, tags }) => tags).reduce((acc, i) => acc + i.length, 0);

        if (displayTagsNo > 3) {
            return (
                <div className="filter-modal" >
                    <div className={`filter-modal-container ${show && "show"} `} >
                        <div className="buttons-container" >
                            <button className="btn" onClick={handleShow} >
                                <BaseIcon
                                    size="md"
                                    icon={ic_filter_list}
                                    color="primary"
                                />
                                {`${displayTagsNo} `}
                                filters
                            </button>
                            <button
                                className="btn mr-auto"
                                onClick={clearAll}
                            >
                                clear all
                            </button>
                            <BaseIcon
                                color="prmiary"
                                icon={ic_close}
                                size="sm"
                                onClick={handleHide}
                                className="close"
                            />
                        </div>
                        <div className="filter" >
                            <TagsArea
                                tagsGroup={tagsGroup}
                                clearItem={clearItem}
                                clearAll={clearAll}
                            />
                        </div>
                    </div>
                </div>
            )
        } else {
            return (<TagsArea className="mx-2" tagsGroup={tagsGroup} clearItem={clearItem} />)
        }
    }
}
