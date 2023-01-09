import { useEffect, useState } from "react"
import axiosPrivate from "../api/axiosPrivate";

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            // (async () => {
            //     const { data } = axiosPrivate.get(`/admin/${email}`)
            //     console.log(data);
            //     setAdmin(data.admin);
            // })()

            fetch(`https://car-parts-server.vercel.app//admin/${email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessJWT')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);
                    setAdminLoading(false);
                })
        }
    }, [user])
    return [admin, adminLoading]
}

export default useAdmin;