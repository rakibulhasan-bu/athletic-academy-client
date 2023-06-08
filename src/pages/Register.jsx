import { useContext, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";

const Register = () => {
  const [hide, setHide] = useState(true);
  const { loading, createUser, updateUserProfile, setLoading } =
    useContext(AuthContext);
  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMG_TOKEN
  }`;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
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

          createUser(data?.email, data?.password)
            .then(() => {
              updateUserProfile(data?.name, imgURL)
                .then(() => {
                  reset();
                  Swal.fire(
                    `Welcome ${data?.name} to Athletic Academy`,
                    "Successfully signed up!",
                    "success"
                  );
                  // saveUser(result.user);
                  navigate("/", { replace: true });
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
        }
      });
  };
  return (
    <div className="flex items-center justify-center px-4 py-20 md:min-h-screen md:px-0 md:py-0">
      <div className="flex flex-col rounded-md bg-gray-100 p-6 text-gray-900 sm:p-10 md:w-1/3">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to AirCNC</p>
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

            <div className="relative flex items-center justify-center">
              <input
                {...register("password", {
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message:
                      "Minimum eight characters, at least one letter and one number",
                  },
                })}
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
            {/* errors will return when field validation fails  */}
            <span className=" text-xs text-red-500">
              {errors.password?.message}
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
