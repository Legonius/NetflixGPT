import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const useSign = (signup, setSignError, name, email, password) => {
  const checkValidate = (name, email, password) => {
    if (signup) {
      // const isNameValid = /^[A-Za-z]+([\ A-Za-z]+)*/.test(name);
      const isNameValid = /^[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/.test(name);

      if (!isNameValid) {
        return "Name is invalid.";
      }
    }
    const isEmailValid =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    if (!isEmailValid) return "Email is invalid";

    const isPasswordValid =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      );
    if (!isPasswordValid) {
      if (signup) {
        return "Password is not Strong";
      }
      return "Password is incorrect";
    }

    return null;
  };
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    const sign = checkValidate(
      name.current?.value,
      email.current.value,
      password.current.value
    );
    setSignError(sign);
    if (sign) return;

    if (signup) {
      console.log("sign up...");
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "",
          }).catch((error) => {
            console.log("error: ", error);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, "+", errorMessage);
          setSignError("Invalid Credentials");

          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          // const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, "+", errorMessage);
          setSignError("Invalid Credentials");
          // ..
        });
    }
  };
  return { handleSubmit };
};

export default useSign;
