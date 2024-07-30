import { useDispatch } from 'react-redux'
// import authService from '@/appwrite/auth';
import React from 'react'
import { logout } from '@/store/authSlice';
import { ClipLoader } from 'react-spinners';

function LogoutBtn() {
    const dispath = useDispatch();
    const [loading, setLoading] = React.useState(false);

    const handleLogOut = async () => {
        setLoading(true)
        await authService.logout()
            .then(() => {
                dispath(logout());
                // window.location.reload();
            })
            .catch((error) => {
                console.error("Logout failed:", error);
            })
            .finally(() => setLoading(false))
    }
    return (
        <button
            onClick={handleLogOut}
            className="w-full  items-center justify-center rounded-md border-2 border-primary bg-primary px-6 py-1 text-center font-medium text-white duration-200 hover:bg-gray-700 focus-visible:ring-primary lg:w-auto"
            disabled={loading}
        >
            {loading ?
                <div className='px-4 text-center'>
                    <ClipLoader color='#fff' size={18}/>
                </div>
                : "Logout"}
        </button>
    )
}
export default LogoutBtn;