import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'simple-flexbox';
import './ContentHeader.css';

import IconSearch from '../../assets/icon-search';
import Search from '../layout/Search'

const ContentHeader = ({title}) => {

    return (
        <Row className="_510_container" horizontal="space-between">
            <span className="_510_title">{title}</span>
            <Row vertical="center">
                    {window.innerWidth > 960 && <Search />}
                    <div className="_510_iconStyles" >
                        <IconSearch />
                    </div>
            </Row>
        </Row>
    )
}

ContentHeader.propTypes = {
    title: PropTypes.string.isRequired
}

export default ContentHeader
