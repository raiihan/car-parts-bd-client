import { useState } from "react"

const useAdmin = () => {
    const [admin, setAdmin] = useState(false);
    return [admin]
}

export default useAdmin;