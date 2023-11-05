import { useRef, useContext } from "react";
import { createUser, createUserOnDataBase } from "../utils/firebase";
import { UserContext } from "../context/userContext";
const useCreateUserForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const { setCurrentUser } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const convertStringName = nameRef.current.value.toString();
    const convertStringEmail = emailRef.current.value.toString();
    const convertStringPassword = passwordRef.current.value.toString();
    const convertStringConfirmPassword =
      confirmPasswordRef.current.value.toString();
    if (convertStringPassword !== convertStringConfirmPassword) {
      alert("Senha não são iguais");
    } else {
      try {
        const { user } = await createUser(
          convertStringEmail,
          convertStringPassword
        );
        await createUserOnDataBase(user, { convertStringName });
        setCurrentUser(user);
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert("Email já em uso");
        } else {
          console.log("Falha ao criar o usúario" + error);
        }
      }
    }
    emailRef.current.value = "";
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
  };
  return { nameRef, emailRef, passwordRef, confirmPasswordRef, handleSubmit };
};
export default useCreateUserForm;
