import React from "react";

function Button({text, color}) {
    return <button style={{backgroundColor: color, paddingInline:'1rem', paddingBlock: '5px'}}>{text}</button>;
}

export default Button;