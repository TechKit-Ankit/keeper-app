import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function Input(props) {

    const [input, setinput] = useState({ title: "", content: "" })
    const [isExpanded, setExpanded] = useState(false);

    function expand() {
        setExpanded(true);
    }

    function changeHandler(event) {
        const { name, value } = event.target;
        setinput((prev) => ({   //prev is the previous value of the state   
            ...prev,            //spread operator to copy the previous value
            [name]: value       //name is the name of the input field and value is the value of the input field
        }))
        console.log(input);
    }


    function submitHandler(event) {
        props.addHandler(input)
        setinput({ title: "", content: "" })
        event.preventDefault()
    }

    return (
        <>
            <div>
                <form className="create-note">
                    {isExpanded && <input name='title' onChange={changeHandler} type='text' placeholder='Title' value={input.title} autoFocus />}
                    <textarea name='content' onClick={expand} onChange={changeHandler} placeholder='Take a note...' rows={isExpanded ? 3 : 1} value={input.content} />
                    <Zoom in={isExpanded}><Fab onClick={submitHandler}><AddIcon /></Fab></Zoom>
                </form>
            </div>
        </>
    )
}

export default Input