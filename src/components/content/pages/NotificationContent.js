import React from 'react'
import { useParams } from 'react-router-dom';
import { Column } from 'simple-flexbox'
import './PagesContent.css';

import ContentHeader from '../ContentHeader';

const NotificationContent = () => {
    const { title } = useParams();
    
    return (
        <Column className="_500_container">
            <ContentHeader title={title} />
            <h4>I'm Notification Component</h4>
        </Column>
    )
}

export default NotificationContent;
