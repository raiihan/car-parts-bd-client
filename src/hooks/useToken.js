import axios from "axios";
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const name = user?.user?.displayName;
        const userInfo = {
            email: email,
            name: name
        };
        if (email) {
            (async () => {
                const { data } = await axios.put(`https://car-parts-bd-server.onrender.com//user/${email}`, userInfo);
                const accessJWT = data?.accessJWT;
                localStorage.setItem('accessJWT', accessJWT);
                setToken(accessJWT);
            })()
        }
    }, [user])

    return [token]
}

export default useToken;