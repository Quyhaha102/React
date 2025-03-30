import ModalCreateUser from "./ModalCreateUser";
import ModalUpdateUser from "./ModalUpdateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";

const ManageUser = () => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});

    const handleShowCreateUser = () => setShowModalCreateUser(true);

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    };
    const resetUpdateData = () => {
        setDataUpdate({});
    };

    // fetch list users
    const [listUser, setListUser] = useState([]);
    //componentdidmount
    useEffect(() => {
        fetchListUsers();
        // console.log(res.DT);
    }, []);
    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUser(res.DT);
        }
    };

    return (
        <div className="manage-user-container">
            <div className="title">
                <h1>ManageUser</h1>
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button
                        className="btn btn-primary"
                        // variant="primary"
                        onClick={() => {
                            handleShowCreateUser();
                        }}
                    >
                        <FcPlus /> Add new users
                    </button>
                </div>
                <div className="table-users-container">
                    <TableUser
                        listUser={listUser}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                    ></TableUser>
                </div>

                {/* Modal */}
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    resetUpdateData={resetUpdateData}
                ></ModalUpdateUser>
            </div>
        </div>
    );
};
export default ManageUser;
