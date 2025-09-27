import { Link } from "react-router-dom";
import '../css/QuestionPage.css';
import {useEffect, useState} from "react";



function QuestionPage() {

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});

    return (
        <div className="question-bg">
        <h1 className="question-title">
            Questionnaire
        </h1>
        <p className="question-desc">
            Please answer the following questions to help us recommend the best study methods and locations for you.
        </p>
        <div className="question-card">
            <label className="question-label">
            I am satisfied with my current study habits.
            </label>
            <div className="question-options">
            {["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"].map((option) => (
                <label key={option} className="question-option-label">
                <input
                    type="radio"
                    name="studySatisfaction"
                    value={option}
                />
                <div>{option}</div>
                </label>
            ))}
            </div>
        </div>
        <div className="question-actions">
            <Link to="/" className="question-link">
            Back
            </Link>
            <button type="button" className="question-btn">
            Next
            </button>
        </div>
        </div>
    );
}

export default QuestionPage;