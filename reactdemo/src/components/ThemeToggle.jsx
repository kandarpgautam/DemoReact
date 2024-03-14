import { useEffect, useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
    const defaultTheme = localStorage.getItem("data-theme");
    const [theme, setTheme] = useState(defaultTheme);

    useEffect(() => {
        const darkModeToggle = document.getElementById("darkmode-toggle");

        darkModeToggle.checked = defaultTheme === "dark";

        if (defaultTheme == "dark") {
            setDarkMode(defaultTheme);
        }
        else {
            setLightMode(defaultTheme);
        }

        darkModeToggle.addEventListener("change", () => {
            if (darkModeToggle.checked) {
                setDarkMode();
            } else {
                setLightMode();
            }
        });
    }, []);

    const setDarkMode = () => {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("data-theme", "dark");
    }

    const setLightMode = () => {
        document.body.setAttribute("data-theme", "light");
        localStorage.setItem("data-theme", "light");
    }

    return (
        <>
            <span className='dark_mode'>
                <input
                    className='dark_mode_input'
                    type='checkbox'
                    id='darkmode-toggle'
                />
                <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                </label>
            </span>
        </>
    );
};

export default ThemeToggle;
