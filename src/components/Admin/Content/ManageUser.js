import ModalCreateUser from "./ModalCreateUser";

const ManageUser = () => {
    return (
        <div className="manage-user-container">
            <div className="title">
                <h1>ManageUser</h1>
            </div>
            <div className="users-content">
                <div>
                    <button>Add new users</button>
                </div>
                <div>
                    table users
                    <ModalCreateUser />
                </div>
            </div>
        </div>
    );
};
export default ManageUser;
