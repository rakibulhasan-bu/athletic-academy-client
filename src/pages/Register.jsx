import { useContext, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";

const Register = () => {
  const [hidePass, setHidePass] = useState(true);
  const [hideConfPass, setHideConfPass] = useState(true);
  const {
    loading,
    createUser,
    updateUserProfile,
    setLoading,
    signInWithGoogle,
  } = useContext(AuthContext);
  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMG_TOKEN
  }`;
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userName = data?.name;
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const imgURL = imageData.data.display_url;

          if (data?.password === data?.ConfirmPassword) {
            createUser(data?.email, data?.password)
              .then(() => {
                updateUserProfile(data?.name, imgURL)
                  .then(() => {
                    const userData = {
                      name: data?.name,
                      email: data?.email,
                      imgURL,
                    };
                    fetch(`${import.meta.env.VITE_API_URL}/users`, {
                      method: "POST",
                      headers: {
                        "content-type": "application/json",
                      },
                      body: JSON.stringify(userData),
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        if (data.insertedId) {
                          reset();
                          Swal.fire(
                            `Welcome ${userName} to Athletic Academy`,
                            "Successfully signed up!",
                            "success"
                          );
                          navigate("/", { replace: true });
                        }
                      });
                  })
                  .catch((err) => {
                    setLoading(false);
                    Swal.fire("Opps!", `${err.message}`, "error");
                  });
              })
              .catch((err) => {
                setLoading(false);
                Swal.fire("Opps!", `${err.message}`, "error");
              });
          } else {
            Swal.fire(
              "Opps!",
              `Your provide password and Confirm password doesn't match`,
              "error"
            );
          }
        }
      });
  };
  return (
    <div className="flex items-center justify-center px-4 py-20 md:min-h-screen md:px-0 md:py-0">
      <div className="flex flex-col rounded-md bg-gray-100 p-6 text-gray-900 sm:p-10 md:my-20 md:w-1/3">
        <div className="mb-4 text-center">
          <h1 className="mb-2 text-4xl font-bold">Create an Account</h1>
          <p className="text-sm text-gray-400">Welcome to Athletic Academy</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="ng-untouched ng-pristine ng-valid space-y-6"
        >
          <div className="space-y-4">
            <input
              {...register("name")}
              type="text"
              required
              placeholder="Enter your name here"
              className="w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-2 text-gray-900 focus:outline-secondary"
            />

            <input
              {...register("email")}
              type="email"
              required
              placeholder="Enter Your Email Here"
              className="w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-2 text-gray-900 focus:outline-secondary"
            />

            {/* these is password field  */}
            <div className="relative flex items-center justify-center">
              <input
                {...register("password", {
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/,
                    message:
                      "Minimum eight characters, at least one uppercase letter, one number and one special character",
                  },
                })}
                type={hidePass ? "password" : "text"}
                placeholder="Please enter your password"
                className="w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-2 text-gray-900 focus:outline-secondary"
                required
              />
              <div className="absolute right-0 mr-3 mt-1 cursor-pointer text-xl">
                {hidePass ? (
                  <AiOutlineEye onClick={() => setHidePass((prev) => !prev)} />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={() => setHidePass((prev) => !prev)}
                  />
                )}
              </div>
            </div>
            {/* errors will return when field validation fails  */}
            <span className=" text-xs text-red-500">
              {errors.password?.message}
            </span>
            {/* these is confirm password field  */}
            <div className="relative flex items-center justify-center">
              <input
                {...register("ConfirmPassword", {
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/,
                    message:
                      "Minimum eight characters, at least one uppercase letter, one number and one special character",
                  },
                })}
                type={hideConfPass ? "password" : "text"}
                placeholder="Please confirm your password"
                className="w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-2 text-gray-900 focus:outline-secondary"
                required
              />
              <div className="absolute right-0 mr-3 mt-1 cursor-pointer text-xl">
                {hideConfPass ? (
                  <AiOutlineEye
                    onClick={() => setHideConfPass((prev) => !prev)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={() => setHideConfPass((prev) => !prev)}
                  />
                )}
              </div>
            </div>
            {/* errors will return when field validation fails  */}
            <span className=" text-xs text-red-500">
              {errors.ConfirmPassword?.message}
            </span>

            <div>
              <label htmlFor="image" className="mb-1 block">
                Select Image:
              </label>
              <input
                {...register("image")}
                required
                type="file"
                accept="image/*"
                className="cursor-pointer"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-primary py-3 text-white"
          >
            {loading ? (
              <ImSpinner9 className="m-auto animate-spin" size={24} />
            ) : (
              "Continue"
            )}
          </button>
        </form>
        <h1 className="my-2 text-center text-2xl font-bold">OR</h1>
        <div
          onClick={handleGoogleSignIn}
          className="my-1 flex cursor-pointer items-center justify-center space-x-2 rounded-lg border border-secondary p-2 hover:shadow-lg"
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
        <p className="flex items-center space-x-1 pt-3 text-center text-sm text-gray-400">
          <p>Already have an account?</p>
          <Link
            to="/login"
            className="text-gray-600 hover:text-third hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
