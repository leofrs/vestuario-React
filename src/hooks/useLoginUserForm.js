import { useRef, useContext } from "react";
import { loginGooglePopup, signIn } from "../utils/firebase";
import { UserContext } from "../context/userContext";

const UseLoginUserForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { setCurrentUser } = useContext(UserContext);

  const loginWithGoogle = async () => {
    const { user } = await loginGooglePopup();
    setCurrentUser(user);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const convertStringEmail = emailRef.current.value.toString();
    const convertStringPassword = passwordRef.current.value.toString();

    try {
      const { user } = await signIn(convertStringEmail, convertStringPassword);
      setCurrentUser(user);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return { emailRef, passwordRef, loginWithGoogle, handleSubmit };
};
export default UseLoginUserForm;
