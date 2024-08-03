import React from 'react';
import { ClipLoader } from 'react-spinners';

function LogoutBtn() {
    const [loading, setLoading] = React.useState(false);

    const handleLogOut = async () => {
            
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