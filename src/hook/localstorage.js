import { useState, useEffect, useRef } from "react";
export const paymentMethod = () => {
    // storage the payment method 
    const storedActiveButton = localStorage.getItem('activeButton') || false;

    // make active class
    const [activeButton, setActiveButton] = useState(false);


    useEffect(() => {
        if (storedActiveButton) {
            setActiveButton(storedActiveButton);
        }
    }, [storedActiveButton]);


    const handleClick = (method) => {
        setActiveButton(method);
        localStorage.setItem('activeButton', method);
    };

    return {
        activeButton, handleClick
    }



}

export const clickOutSide = () => {
    const [isOpen, setIsOpen] = useState(false)

    const menuRef = useRef()

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        const handleWindowResize = () => {
     
            if (window.innerWidth > 624) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('resize', handleWindowResize);

        if (isOpen) {
            document.body.classList.add("backDrop");
        } else {
            document.body.classList.remove("backDrop");
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [isOpen]);

    return {
        isOpen, handleOpen, menuRef
    }
}