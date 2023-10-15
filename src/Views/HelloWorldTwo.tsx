import React, { useContext } from 'react';
import Context from '../context';


const HelloWorldTwo: React.FC = () => {
    const { context, setContext } = useContext(Context)

    return (
        <div>{context?.apiKey} Two!</div>
    );
}

export default HelloWorldTwo;
