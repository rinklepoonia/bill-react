import React from "react";
const Icons = ({ icon, className = "", ...props }) => {
    const iconsList = {
        "btn-arrow": (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="group-hover:stroke-white transition-all duration-300 ease-linear" d="M6 19L19 6M19 6V18.48M19 6H6.52" stroke="#00171F" stroke-width="1.93338" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ),
        "white-btn-arrow": (<svg className=" transition-all duration-300 ease-linear" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 19L19 6M19 6V18.48M19 6H6.52" stroke="white" strokeWidth="1.93338" strokeLinecap="round" strokeLinejoin="round" />
        </svg>)

    };
return icon && iconsList[icon];
};
export default Icons;