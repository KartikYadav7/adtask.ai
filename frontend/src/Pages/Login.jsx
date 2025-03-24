import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { Button,  Email, PasswordInput } from "../pages/SignUp";

const Login = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const success = await login(email, password
      );
      if (success) {
        navigate('/')
      }
    }
    catch (error) {
      setError(error.message || "Check Creditionals");
    }
  };

  return (
    <>

      <div className="flex flex-col items-center justify-center  ">
        <h1 className="text-7xl my-4 font-medium">Adtask.ai</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-72  p-4  border border-gray-400 rounded-xl "
        >
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

          <Button
            type="submit"
            text="Login" />
          <Link to='/resetPassword' className="text-center"> Forgot Password ?</Link>
        </form>
        <span className="my-2">Don&apos;t have any account?
          <Link to="/register"
          className=" font-bold " > Click Here </Link> </span>
    </div >
    </>
  );
};

export default Login;
