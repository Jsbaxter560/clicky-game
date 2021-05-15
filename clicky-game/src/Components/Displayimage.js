import React from "react";
function Displayimage(props) {
return (
    <div>
        <img src={props.url} alt={props.id} width="200" height="200" onClick= {() => props.didClick (props.id)}/>
    </div>
)
}

export default Displayimage