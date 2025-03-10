import React from "react";
import { useState } from "react";

import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

const Mycomponent = () => {
    const [state, setState] = useState({
        list: [
            { id: 1, name: "Quy", address: "can", age: 23 },
            { id: 2, name: "blala", address: "hn", age: 26 },
            { id: 3, name: "hahah", address: "tphcm", age: 22 },
        ],
    });

    const addNewUser = (userObj) => {
        setState({ list: [userObj, ...state.list] });
    };
    const handleDeleteUser = (id) => {
        let listUserClone = state.list;
        listUserClone = listUserClone.filter((item) => item.id !== id);
        setState({ list: listUserClone });
    };  

    return (
        <div>
            <AddUserInfor addNewUser={addNewUser}></AddUserInfor>
            <DisplayInfor
                list={state.list}
                handleDeleteUser={handleDeleteUser}
            ></DisplayInfor>
        </div>
    );
};
export default Mycomponent;
