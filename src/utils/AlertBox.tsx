import { FaInfoCircle } from 'react-icons/fa';

export default function AlertBox() {
    const handleResend = () => {
        console.log("Resend Email")
    }
    return (
        <div className="bg-[#BBCBE9] rounded text-primary text-sm p-2 flex justify-center w-full">
            <div className="flex items-center justify-center gap-2">
                <span className='hidden sm:block'><FaInfoCircle /></span>
                <p>
                    <span>We have sent a verification email to your email address.</span>
                    <span> Didn&#39;t receive it? </span>
                    <button onClick={handleResend} className='bg-primary px-2 py-1 text-gray-100 rounded'>Resend</button>
                </p>
            </div>
        </div>
    )
}
