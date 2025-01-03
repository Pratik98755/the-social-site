import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [userdata, setUserdata] = useState({ username: "", password: "" });
  const { login,checkAuthStatus } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserdata((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, message } = await login(
      userdata.username,
      userdata.password
    );
    if (success) {
      toast.success(message);
    } else {
      toast.error(message);
    }
    // checkAuthStatus();
    navigate("/");

  };

  return (
    <>
      <div className="container m-auto bg-slate-400 ">
        <p className="text-3xl font-semibold text-center mt-3">LogIn page</p>
        <div className="text-center mt-5">
          <form onSubmit={handleSubmit}>
            <div className="fields my-2">
              <input
                type="text"
                name="username"
                required
                value={userdata.username}
                onChange={handleChange}
                placeholder="Username here"
                className="border-blue-400 border-2 rounded-lg text-center"
              />
            </div>
            <div className="fields my-2">
              <input
                required
                type="password"
                name="password"
                value={userdata.password}
                onChange={handleChange}
                placeholder="Password here"
                className="border-blue-400 border-2 rounded-lg text-center"
              />
            </div>
            <button type="submit" className="form_button mt-1">
              Enter!
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
