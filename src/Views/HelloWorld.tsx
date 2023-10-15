import React, { useContext } from 'react';
import Context from '../context';


const HelloWorld: React.FC = () => {
    const { context, setContext } = useContext(Context)

    return (
        <div>{context?.apiKey}!</div>
    );
}

export default HelloWorld;
