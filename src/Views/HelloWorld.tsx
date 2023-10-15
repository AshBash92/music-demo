import React, { useContext } from 'react';
import Context from '../context';
import '../App.css';

const HelloWorld: React.FC = () => {
    const { context, setContext } = useContext(Context)

    return (
        <div>
            {context?.apiKey}!
            <br />
            <input
                type="text"
                placeholder="Search for an artist"
            />
        </div>
    );
}

export default HelloWorld;