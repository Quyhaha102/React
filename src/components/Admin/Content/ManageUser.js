import ModalCreateUser from "./ModalCreateUser";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDelete from "./ModalDeleteUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import TableUserPaginate from "./TableUserPaginate";
import { useEffect, useState } from "react";
import { getAllUsers, getUserWithPaginate } from "../../../services/apiService";
import { set } from "lodash";

const ManageUser = () => {
    const LIMIT_USER = 3;
    const [listUser, setListUser] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchListUserWithPaginate = async (page) => {
        let res = await getUserWithPaginate(page, LIMIT_USER);
        if (res.EC === 0) {
            setListUser(res.DT.users);
            setPageCount(res.DT.totalPages);
        }
    };
    useEffect(() => {
        fetchListUserWithPaginate(1);
    }, []);
    // --------------------------------------------------------
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
    // ModalDelete
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [dataDelete, setDataDelete] = useState({});

    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(true);
        setDataDelete(user);
    };

    // fetch list all users
    // componentdidmount
    // useEffect(() => {
    //     fetchListUsers();
    //     // console.log(res.DT);
    // }, []);
    // const fetchListUsers = async () => {
    //     let res = await getAllUsers();
    //     if (res.EC === 0) {
    //         setListUser(res.DT);
    //     }
    // };

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
                    {/* <TableUser
                        listUser={listUser}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnDelete={handleClickBtnDelete}
                    ></TableUser> */}
                    <TableUserPaginate
                        listUser={listUser}
                        // LIMIT_USER={LIMIT_USER}
                        pageCount={pageCount}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnDelete={handleClickBtnDelete}
                        fetchListUserWithPaginate={fetchListUserWithPaginate}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    ></TableUserPaginate>
                </div>

                {/* Modal */}
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUserWithPaginate={fetchListUserWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUserWithPaginate={fetchListUserWithPaginate}
                    resetUpdateData={resetUpdateData}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                ></ModalUpdateUser>

                <ModalDelete
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    fetchListUserWithPaginate={fetchListUserWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                ></ModalDelete>
            </div>
        </div>
    );
};
export default ManageUser;
