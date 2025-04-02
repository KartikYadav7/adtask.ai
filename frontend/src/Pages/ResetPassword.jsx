import  { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Email, PasswordInput, Button } from './SignUp'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const ResetPassword = () => {
    const navigate = useNavigate();
    const[loading,setLoading]=useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            await axios.post(`${BACKEND_URL}/resetPassword`, {
                email,
                password,
                confirmPassword
            });
            setMessage('Password Reset Successfully');
            setError(null);
            navigate("/login")

        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
                setMessage('');
            }
        }finally{
            setLoading(false)
        }
    };
    return (
        <>
            <div className='flex flex-col items-center mt-10  h-screen'>
                <form className='flex flex-col w-72  p-4  border border-gray-400 rounded-xl '
                    onSubmit={handleSubmit}>
                    <p className='text-2xl text-center my-2 bg-gray-900 p-2 rounded-xl'>Reset Password</p>
                    Email
                    <Email email={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="relative">
                        New Password
                        <PasswordInput
                            placeholder='Enter New Password'
                            password={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <span className="relative">
                        Confirm Password
                        <PasswordInput
                            placeholder='Confirm New Password'
                            password={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </span>
                    <p className=" mb-2 h-2.5 text-sm">{error}</p>
                    <Button type="submit" disabled={loading}
                        text="Reset Password" />
                </form>
            </div>
        </>
    )
}

export default ResetPassword
