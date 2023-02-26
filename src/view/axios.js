import React, {useEffect, useState} from "react";
import axios from 'axios';

function Axios() {
    const [hello, setHello] = useState('');

    useEffect(() => {
       axios.get('/api/board')
           .then(response => setHello(response.data))
           .catch(error => console.log(error))
    }, []);

    return (
        <div>
            백엔드 호출: {hello}
        </div>
    )
}

export default Axios;