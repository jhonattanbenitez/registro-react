import React from 'react';
import {withRouter} from 'react-router-dom'

import './website-list.styles.scss';

const WebsiteList = ({ title, imageUrl, size, websiteUrl , history, linkUrl, match}) => (
    <div className={`${size} website-list`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
        <div
            className="background-image"
            style={{ backgroundImage:`url(${imageUrl})`
             }} 
        />
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">{websiteUrl}</span>
            <span  className="subtitle">Ver Registro</span>
        </div>
    </div>
);

export default withRouter(WebsiteList);

