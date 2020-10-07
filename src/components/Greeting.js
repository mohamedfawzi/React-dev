import React from 'react';
import User from './User';
import Guest from './Guest';

const Greeting = (props) => {

    // if (props.isLoged) {
    //     return <User />
    // }
    // else {
    //     return <Guest />
    // }

    return (
        // <div>
        //     { props.isLoged &&
        //         <User />
        //     }
        //     { !props.isLoged &&
        //         <Guest />
        //     }
        // </div>

        <div>
            { props.isLoged ? <User /> : <Guest />}
        </div>
    )
}
export default Greeting;