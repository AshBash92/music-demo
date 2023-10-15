import React, { useContext } from 'react';
import Context from '../Context';


const HelloWorldTwo: React.FC = () => {
    const { context, setContext } = useContext(Context)

    return (
        <div>{context.client_id} Two!</div>
    );
}

export default HelloWorldTwo;
