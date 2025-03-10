import React, { useEffect } from "react";
import { useState } from "react";

import "./DisplayInfor.scss";

const DisplayInfor = (props) => {
    const { list } = props;
    const [ShowHideListUser, setShowHideListUser] = useState(true);
    const handleShowHideListUser = () => {
        setShowHideListUser(!ShowHideListUser);
    };
    useEffect(() => {
        setTimeout(() => {
            document.title = `test`;
        }, 3000);
    }, [list]);

    return (
        <div className="díplay-infor-container">
            <span onClick={() => handleShowHideListUser()}>
                {ShowHideListUser === true ? "Hide user" : "Show user"}
            </span>

            {ShowHideListUser && (
                <div>
                    {list.map((user, index) => {
                        return (
                            <div
                                key={user.id}
                                className={+user.age > 18 ? "green" : "red"}
                            >
                                <div>My name's {user.name} </div>
                                <div>My age's {user.age} </div>
                                <div>
                                    <button
                                        onClick={() => {
                                            props.handleDeleteUser(user.id);
                                        }}
                                    >
                                        delete
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default DisplayInfor;
