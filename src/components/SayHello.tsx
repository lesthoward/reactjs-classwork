import React,  {Fragment} from 'react';

interface SayHi {
    name: string,
    age: number,
    address?: string,
    email: string
}

const SayHello:React.FC<SayHi> = ({ name, age, address = 'no address', email }) => {
    return ( 
        <Fragment>
            {/* <h1>Hello from SayHello</h1> */}
            <ul>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <li>Address: {address}</li>
                <li>Email: {email}</li>
            </ul>
        </Fragment> 
    );
}
 
export default SayHello;