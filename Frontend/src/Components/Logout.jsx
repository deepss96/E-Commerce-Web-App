import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser, setAuthUser] = useAuth()
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("Users")
            toast.success("Logout Successfully ")
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        } catch (error) {
            toast.error("Error: " + error.message);
            setTimeout(() => {
                
            }, 2000);
        }
    }
    return (
        <div>
            <button className=" px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer
            dark:bg-slate-900 dark:text-white dark:border-[1px] dark:border-red-500" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout