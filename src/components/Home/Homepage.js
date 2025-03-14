import videoHomepage from "../../assets/videoHomepage.mp4";
const Home = () => {
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
                    <button>Get's started. It's free</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
