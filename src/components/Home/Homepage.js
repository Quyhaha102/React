import videoHomepage from "../../assets/videoHomepage.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const account = useSelector((state) => state.user.account);
    const navigate = useNavigate();
    return (
        <div className="homepage-container">
            <video controls autoPlay loop muted>
                <source src={videoHomepage} type="video/mp4" />
            </video>
            <div className="homepage-content">
                <div className="title-1">There's a better way to ask</div>
                <div className="title-2">
                    You don't want to make a boring from. And your audience
                    won't answer one. Create a typeform instead - it's free and
                    easy.
                </div>

                <div className="title-3">
                    {isAuthenticated === true ? (
                        <button
                            onClick={() => {
                                navigate("/users");
                            }}
                        >
                            Doing Quiz now
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                                navigate("/login");
                            }}
                        >
                            Get's started. It's free
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
