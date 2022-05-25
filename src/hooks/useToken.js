import axios from "axios";
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    console.log(user);
    useEffect(() => {
        const email = user?.user?.email;
        const name = user?.user?.displayName;
        const userInfo = {
            email: email,
            name: name
        };
        if (email) {
            (async () => {
                const { data } = await axios.put(`http://localhost:5000/user/${email}`, userInfo);
                console.log(data.accessJWT);
                const accessJWT = data?.accessJWT;
                localStorage.setItem('accessJWT', accessJWT);
                setToken(accessJWT);
            })()

            // fetch(`http://localhost:5000/user/${email}`, {
            //     method: 'PUT',
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(userInfo)
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         console.log('data inside useToken', data);
            //         // const accessToken = data.token;
            //         // localStorage.setItem('accessToken', accessToken);
            //         // setToken(accessToken);
            //     })
        }
    }, [user])

    return [token]
}

export default useToken;