import React from 'react';
import '../../App.sass';

// Called into every page to name the title.
export default function Title({ title }) {
    return (
        <div className="column is-two-quarter">
            <h4 className="title is-3 has-text-left ">{title}</h4>
        </div>
    );
}
