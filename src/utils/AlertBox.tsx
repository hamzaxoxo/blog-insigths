import { useAppSelector } from '@/store/store';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaInfoCircle } from 'react-icons/fa';

export default function AlertBox() {
    const [isSending, setIsSending] = useState(false);
    const user = useAppSelector((state) => state.users?.user);


    const handleResend = async (e: any) => {
        e.preventDefault();
        setIsSending(true);
        try {
            const res: any = await axios.post('/api/auth/email/resend', { email: user?.email });
            const data = res.data;
            toast.success(data?.message);

        } catch (error: any) {
            console.error(error);
            toast.error(error.message || 'An error occurred');
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="bg-[#BBCBE9] rounded text-primary text-sm p-2 flex justify-center w-full">
            <div className="flex items-center justify-center gap-2">
                <span className='hidden sm:block'><FaInfoCircle /></span>
                <p>
                    <span>We have sent a verification email to your email address.</span>
                    <span> Didn&#39;t receive it? </span>
                    <button
                        onClick={handleResend}
                        className={`bg-primary px-2 py-1 text-gray-100 rounded ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isSending}
                    >
                        {isSending ? 'Sending...' : 'Resend'}
                    </button>
                </p>
            </div>
        </div>
    );
}
