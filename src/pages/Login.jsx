import { Link, useLocation, useNavigate } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
  const [hide, setHide] = useState(true);
  const {
    loading,
    signInWithGoogle,
    signIn,
    // resetPassword,
    setLoading,
  } = useContext(AuthContext);
  // const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        const userData = {
          name: user?.displayName,
          email: user?.email,
          imgURL: user?.photoURL,
        };
        fetch(`${import.meta.env.VITE_API_URL}/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then(() => {
            setLoading(false);
            Swal.fire(
              `Welcome ${user?.displayName} to Athletic Academy`,
              "Successfully logged in!",
              "success"
            );
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        error &&
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Your password or name is invalid",
          });
      });
  };
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    signIn(data?.email, data?.password)
      .then((result) => {
        const loggedUser = result.user;
        reset();
        setLoading(false);
        Swal.fire(
          "Login successful!",
          `Welcome back, ${loggedUser?.displayName}!`,
          "success"
        );
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        {
          error &&
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Your password or name is invalid",
            });
        }
      });
  };
  //   handle password reset
  // const handleResetPass = () => {
  //   const email = emailRef.current.value;
  //   if (email) {
  //     resetPassword(email)
  //       .then(() => {
  //         Swal.fire(
  //           "Send Link successful!",
  //           "Please check your email for reset link",
  //           "success"
  //         );
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         setLoading(false);
  //         console.log(err.message);
  //         Swal.fire({
  //           icon: "error",
  //           title: "Oops...",
  //           text: `${err.message}`,
  //         });
  //       });
  //   } else {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: `Please Provide Your valid email for Reset password`,
  //     });
  //   }
  // };
  return (
    <div className="flex items-center justify-center py-20 md:min-h-screen md:py-0">
      <div className="mx-4 flex w-full flex-col rounded-lg bg-green-50 p-6 text-gray-900 shadow-md sm:p-10 md:mx-0 md:my-28 md:w-1/3">
        <h1 className="mb-2 text-center text-4xl font-bold">Welcome Back </h1>
        <p className="px-3 text-center text-sm text-gray-400">
          Login to your account with Goggle
        </p>
        <div
          onClick={handleGoogleSignIn}
          className="my-3 flex cursor-pointer items-center justify-center space-x-2 rounded-lg border border-secondary p-2 hover:shadow-lg"
        >
          <svg
            width={19}
            height={20}
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
              fill="#4285F4"
            />
            <path
              d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
              fill="#34A853"
            />
            <path
              d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
              fill="#FBBC05"
            />
            <path
              d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
              fill="#EB4335"
            />
          </svg>

          <p>Continue with Google</p>
        </div>
        <h1 className="my-2 text-center text-2xl font-bold">OR</h1>
        <p className="px-3 pb-2 text-center text-sm text-gray-400">
          Login with email and password
        </p>
        {/* log in form start here  */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="ng-untouched ng-pristine ng-valid space-y-6"
        >
          <div className="space-y-4">
            <input
              {...register("email")}
              // ref={emailRef}
              type="email"
              required
              placeholder="Please enter your Email"
              className="w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-2 text-gray-900 focus:outline-secondary"
            />
            <div className="relative flex items-center justify-center">
              <input
                {...register("password")}
                aria-label="enter Password"
                type={hide ? "password" : "text"}
                placeholder="Please enter your password"
                className="w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-2 text-gray-900 focus:outline-secondary"
                required
              />
              <div className="absolute right-0 mr-3 mt-1 cursor-pointer text-xl">
                {hide ? (
                  <AiOutlineEye onClick={() => setHide((prev) => !prev)} />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={() => setHide((prev) => !prev)}
                  />
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-primary py-3 text-lg font-medium text-white"
          >
            {loading ? (
              <ImSpinner9 className="m-auto animate-spin" size={24} />
            ) : (
              "Log In"
            )}
          </button>
        </form>
        <div className="flex justify-end space-y-1 pt-1">
          <button
            // onClick={handleResetPass}
            className=" text-sm text-gray-600 hover:text-primary hover:underline"
          >
            Forgot password?
          </button>
        </div>

        <p className="flex space-x-1 px-6 pt-2 text-center text-sm text-gray-400">
          <p>Don&apos;t have an account yet?</p>
          <Link
            to="/register"
            className="text-gray-600 hover:text-primary hover:underline"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
