import Button from "./Button/Button";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slice/authSlice";
import { supabase } from "../api/supabase";

const LogoutButton = () => {
  const dispatch = useDispatch();
  async function signOutUser() {
    await supabase.auth.signOut();

    dispatch(logout());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signOutUser();
  };

  return <Button onClick={handleSubmit}>Logout</Button>;
};

export default LogoutButton;
