import { useEffect, useState } from "react";
import { TbMoon, TbSunHigh } from "react-icons/tb";
const DarkMode = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div
      className="cursor-pointer rounded-full border-2 border-gray-200 bg-white p-1.5 shadow"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <TbSunHigh className="text-yellow-400" />
      ) : (
        <TbMoon className="text-gray-700" />
      )}
    </div>
  );
};

export default DarkMode;
