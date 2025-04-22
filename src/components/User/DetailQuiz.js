import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataQuiz } from "../../services/apiService";
import _, { set } from "lodash";
import "./DetailQuiz.scss";
import Question from "./Question";

const DetailQuiz = () => {
    const params = useParams();
    const quizId = params.id;
    const location = useLocation();

    const [dataQuiz, setDataQuiz] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetchQuestion();
    }, [quizId]);

    const fetchQuestion = async () => {
        let res = await getDataQuiz(quizId);
        console.log("check quiz by user", res);

        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                //Group the elements of array based on 'id' property
                .groupBy("id")
                //'key' is group'name (color),"value " is the array of objects
                .map((value, key) => {
                    let answers = [];
                    let questionDescription,
                        image = "";
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDescription = item.description;
                            image = item.image;
                        }
                        item.answers.issSelected = false;
                        answers.push(item.answers);
                    });
                    return {
                        questionId: key,
                        answers,
                        questionDescription,
                        image,
                    };
                })
                .value();
            console.log("answers", data);
            setDataQuiz(data);
        }
    };

    const handlePrev = () => {
        if (index - 1 < 0) return;
        setIndex(index - 1);
    };
    const handleNext = () => {
        if (index < dataQuiz.length - 1) {
            setIndex(index + 1);
        }
    };

    const handleCheckbox = (answerId, questionId) => {
        let dataQuizClone = _.cloneDeep(dataQuiz); // react hook doesn't merge state    
        let question = dataQuizClone.find((item) => +item.questionId === +questionId);
        if (question &&  question.answers) {
            question.answers = question.answers.map((item) => {
                if (+item.id === +answerId) {
                    item.issSelected = !item.issSelected;
                }
                return item;
            });
        }
        let index = dataQuizClone.findIndex((item) => +item.questionId === +questionId);
        if (index > -1) {
            dataQuizClone[index] = question;
            setDataQuiz(dataQuizClone);
        }

    }

    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz: {quizId} : {location?.state?.quizTitle}
                </div>
                <hr></hr>
                <div className="q-body">
                    <img src="" alt="img" className="q-image"></img>
                </div>
                <div className="q-content">
                    <Question
                        index={index}
                        handleCheckbox={handleCheckbox}
                        data={
                            dataQuiz && dataQuiz.length > 0
                                ? dataQuiz[index]
                                : []
                        }
                    />
                </div>
                <div className="footer">
                    <button
                        className="btn btn-secondary"
                        onClick={() => {
                            handlePrev();
                        }}
                    >
                        Prev
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            handleNext();
                        }}
                    >
                        Next
                    </button>
                    <button
                        className="btn btn-warning"
                        onClick={() => handleNext}
                    >
                        Finish
                    </button>
                </div>
            </div>
            <div className="right-content">count down</div>
        </div>
    );
};
export default DetailQuiz;
