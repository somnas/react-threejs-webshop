import React from 'react';

import { useSnapshot } from 'valtio';

import state from '../store';

export default function CustomButton({ type, title, customeStyles, handleClick }) {

    const snap = useSnapshot(state);

    const generateStyle = (type) => {
        if (type === 'filled') {
            return {
                backgroundColor: snap.color,
                color: '#FFF'
            };
        }
    };

    return (
        <button
            className={`px-2 py-1.5 flex-1 rounded-md ${customeStyles}`}
            style={generateStyle(type)}
            onClick={handleClick}
        >
            {title}
        </button>
    );
}
