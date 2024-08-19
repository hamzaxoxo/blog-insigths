'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const router = useRouter();
    const [captcha, setCaptcha] = React.useState<string | null>(null);
    const recaptchaRef = React.useRef<any>(null);


    const handleCaptchaChange = (value: string | null) => {
        setCaptcha(value);
    };
    const [open, setOpen] = React.useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div>
            <button onClick={onOpenModal}>Open modal</button>
            <Modal open={open} onClose={onCloseModal} center>
                <h2>Simple centered modal</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                    hendrerit risus, sed porttitor quam.
                </p>
            </Modal>
        </div>
    );
}
