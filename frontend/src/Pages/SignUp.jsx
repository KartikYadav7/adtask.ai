import { useState } from 'react'
import axios from 'axios'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const className = "p-2 border border-gray-400 rounded-xl my-2 mb-4";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const Button = ({ type, text }) => {
  return <>
    <button type={type} className={`${className} w-full hover:bg-gray-900`}>{text}</button>
  </>
}

const Input = ({ name, onChange }) => {

  return <>
    <input type="text"
    autoFocus
      name={name}
      placeholder='Enter Your Name'
      required
      autoComplete='name'
      className={`${className}`}
      onChange={onChange} />
  </>
}

const Email = ({ email, onChange }) => {

  return (<>
    <input

      type="email"
      name="email"
      value={email}
      placeholder="Enter Your Email"
      autoComplete="email"
      className={`${className}`}
      required
      onChange={onChange}
    />
  </>
  )
}

const PasswordInput = ({ password, onChange ,placeholder="Enter your Password"}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (<>
    <input
      type={showPassword ? "text " : "password"}
      name="password"
      className={`${className}my-2 w-full`}
      required
      onChange={onChange}
      placeholder={placeholder}
    />
    <button
      type="button"
      className="text-red-900 absolute right-4 top-14 transform -translate-y-1/2"
      onClick={() => {
        setShowPassword((prev) => (!prev))
      }}>
      {showPassword ? <FaEye /> : <FaEyeSlash />}
    </button>
  </>)
}

const SignUp = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.post(`${BACKEND_URL}/register`, {
        name: name,
        email,
        password,

      });
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      }
      else {
        setError("Something went wrong. Please try again.");
      }
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center  ">
        <h1 className="text-7xl my-4 font-medium">Adtask.ai</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-72  p-4  border border-gray-400 rounded-xl ">
          Name
          <Input name="name"
            onChange={(e) => { setName(e.target.value) }} />

          Email
          <Email email={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <span className="relative">
            Password
            <PasswordInput
              password={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </span>

          <p className=" mb-2 h-2.5 text-sm">{error}</p>

          <Button type=" submit"
            text="Register" />
          <p className='text-center'>Alredy have an account?</p>
          <Link to='/login'><Button type=" Button"
            text="Login" /></Link>

        </form>
      </div>
    </>
  )
}

export { SignUp, Input, Email, PasswordInput, Button ,}
