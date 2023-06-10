import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const AddAClass = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMG_TOKEN
  }`;
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    console.log(data);
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
          const {
            seats,
            price,
            instructorName,
            instructorEmail,
            className,
            status,
          } = data || {};
          const addClassData = {
            seats,
            price,
            instructorName,
            instructorEmail,
            className,
            status,
            imgURL,
          };
          fetch(`${import.meta.env.VITE_API_URL}/allClass`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addClassData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                setLoading(false);
                reset();
                Swal.fire(
                  "Successfully class added!",
                  `Your Class register as ${className}`,
                  "success"
                );
              }
            })
            .catch((error) => {
              setLoading(false);
              error &&
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Your add class in not Successful",
                });
            });
        }
      });
  };
  return (
    <div className="mx-20 my-20 rounded-lg border border-primary px-8 py-6 shadow-md">
      <h1 className="text-center text-3xl font-semibold">Add A Class</h1>
      <div className="py-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="ng-untouched ng-pristine ng-valid space-y-6"
        >
          <div className="flex items-center gap-8">
            <input
              {...register("instructorName")}
              type="text"
              value={user?.displayName}
              required
              placeholder="Enter your name here"
              className="w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-2 text-gray-900 focus:outline-secondary"
            />

            <input
              {...register("instructorEmail")}
              type="email"
              value={user?.email}
              required
              placeholder="Enter Your Email Here"
              className="w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-2 text-gray-900 focus:outline-secondary"
            />
            <input
              {...register("status")}
              type="text"
              value="pending"
              required
              className="hidden w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-2 text-gray-900 focus:outline-secondary"
            />
          </div>
          <div className="flex items-center gap-8">
            <input
              {...register("className")}
              type="text"
              required
              placeholder="Enter your Class name here"
              className="w-1/2 rounded-md border border-gray-300 bg-gray-200 px-3 py-2 text-gray-900 focus:outline-secondary"
            />
            <div className="flex w-1/2 items-center gap-2">
              <label className="mb-1 font-medium">Class Image:</label>
              <input
                {...register("image")}
                required
                type="file"
                accept="image/*"
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex items-center gap-8">
            <input
              {...register("seats", { valueAsNumber: true })}
              type="number"
              required
              placeholder="Enter available seats Here"
              className="w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-2 text-gray-900 focus:outline-secondary"
            />
            <input
              {...register("price", { valueAsNumber: true })}
              type="number"
              required
              placeholder="Enter class price here"
              className="w-full rounded-md border border-gray-300 bg-gray-200 px-3 py-2 text-gray-900 focus:outline-secondary"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-primary py-3 font-medium text-white"
          >
            {loading ? (
              <ImSpinner9 className="m-auto animate-spin" size={24} />
            ) : (
              "Add Class"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAClass;
