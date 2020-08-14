import React from 'react';
import './index.css';

const Card = ({ user_id , name }) => {
    return (
        <div className="card">
            <div className="card--head"></div>
            <div className="card--body">
                    <div>ID :{' '+user_id}</div>
                    <div>Name :{' '+name}</div>
            </div>
            <div className="card--footer"></div>
        </div>
    )
}

export default Card;