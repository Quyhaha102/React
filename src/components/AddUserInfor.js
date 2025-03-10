import React from "react";
import { useState } from "react";

const AddUserInfor = (props) => {
    const [state, setState] = useState({
        name: "Quy",
        address: "can",
        age: 23,
    });

    const handleOnchangeInput = (event) => {
        setState({ name: event.target.value });
        console.log(event.target.value);
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.addNewUser(state);
    };

    return (
        <div>
            <form
                onSubmit={(event) => {
                    handleOnSubmit(event);
                }}
            >
                <label>Tên　</label>
                <input
                    value={state.name}
                    type="text"
                    onChange={(event) => {
                        handleOnchangeInput(event);
                    }}
                ></input>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default AddUserInfor;
