import _ from "lodash";
const Question = (props) => {
    const { data, index } = props;
    if (_.isEmpty(data)) return <></>;

    const handleHandleCheckbox = (event, aId, qId) => {
        props.handleCheckbox(aId, qId); 
    }
    return (
        <>
            {data.image ? (
                <div className="q-image">
                    <img
                        src={`data:image/jpeg;base64,${data.image}`}
                        alt="img"
                    ></img>
                </div>
            ) : (
                <div className="q-image"></div>
            )}
            <div className="question">
                Question {index + 1} : {data.questionDescription}
            </div>
            {/* {console.log("data", data)} */}
            <div className="answer">
                {data.answers &&
                    data.answers.length &&
                    data.answers.map((a, index) => {
                        return (
                            <div className="a-child" key={`answer-${index}`}>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={a.issSelected}
                                        onChange={(event) =>  {
                                            handleHandleCheckbox(event, a.id, data.questionId);
                                        }} 
                                    />
                                    <label className="form-check-label">
                                        {a.description}
                                    </label>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
};

export default Question;
