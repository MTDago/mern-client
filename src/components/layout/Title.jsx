import React from 'react';
import '../../App.sass';

export default function Title({ title }) {
    return (
        <div className="column is-two-quarter">
            <h4 className="title is-3 has-text-left ">{title}</h4>
        </div>
    );
}
