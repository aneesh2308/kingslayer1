import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormGroup,
  CInput,
  CButton,
  CSpinner,
  CLabel,
  CInputGroup,
} from "@coreui/react";
import db from "../../config/fbconfig";

const answer = {
  answer: "",
  is_correct: false,
};

const mcq = {
  question: "",
  answers: [answer, answer, answer, answer],
};

const initialState = {
  title: "",
  posted_by_admin_id: "",
  timestamp: "",
  institute_id: "",
  mcqs: [mcq],
};

export const AddMCQ = ({ match }) => {
  const id = match.params.id;

  const [loading, setLoading] = useState(false);
  const [MCQ, setMcq] = useState(initialState);
  const instituteId = localStorage.getItem("institute");
  const adminId = localStorage.getItem("admin_id");
  const [correctAnswer, setCorrectAnswer] = useState([""]);
  useEffect(() => {}, []);

  const handleChange = (e) => {
    setMcq({
      ...MCQ,
      [e.target.name]: e.target.value,
    });
  };

  const addMcq = async (e) => {
    e.preventDefault();

    if (MCQ.title.trim() === "" || !instituteId) {
      alert("All fields are required");
      return;
    }

    let tempMCQ = MCQ;

    const setAnswer = (index, mcq_index) => {
      const temp = tempMCQ.mcqs.map((m, i) =>
        i !== index
          ? m
          : {
              ...m,
              answers: m.answers.map((a, _i) =>
                _i === mcq_index
                  ? {
                      ...a,
                      is_correct: true,
                    }
                  : {
                      ...a,
                      is_correct: false,
                    }
              ),
            }
      );
      tempMCQ = {
        ...tempMCQ,
        mcqs: temp,
      };
      //   setMcq({
      //     ...tempMCQ,
      //     mcqs: temp,
      //   });
    };

    for (let i = 0; i < tempMCQ.mcqs.length; ++i) {
      let found = false;
      for (let j = 0; j < 4; ++j) {
        if (
          tempMCQ.mcqs[i].answers[j].answer.toLowerCase() ===
          correctAnswer[i].toLowerCase()
        ) {
          found = true;
          setAnswer(i, j);
          break;
        }
      }

      if (!found) {
        alert(`Answer not found in options, for ${i + 1} question`);
        return;
      }
    }

    setLoading(true);

    const mcqObject = {
      ...tempMCQ,

      posted_by_admin_id: adminId,
      institute_id: instituteId,
      timestamp: Date.now(),
    };

    // console.log(mcqObject);

    try {
      if (id)
        await db
          .collection("mcqTests")
          .doc(id)
          .update({
            ...mcqObject,
          });
      else await db.collection("mcqTests").add(mcqObject);
      alert(`MCQ ${id ? "updated" : "added"} successfully`);
    } catch (err) {
      alert("Something Wrong");
    }

    setLoading(false);
  };

  const answers = (answer, index, mcq_index) => {
    return (
      <CInput
        name={`answer${mcq_index + 1}`}
        placeholder={`Answer ${mcq_index + 1}`}
        required
        value={answer.answer}
        onChange={(e) => {
          const temp = MCQ.mcqs.map((m, i) =>
            i !== index
              ? m
              : {
                  ...m,
                  answers: m.answers.map((a, _i) =>
                    _i === mcq_index
                      ? {
                          ...a,
                          answer: e.target.value,
                        }
                      : a
                  ),
                }
          );
          setMcq({
            ...MCQ,
            mcqs: temp,
          });
        }}
      />
    );
  };

  const addOneMcq = () => {
    setMcq({
      ...MCQ,
      mcqs: [...MCQ.mcqs, mcq],
    });
    setCorrectAnswer([...correctAnswer, ""]);
  };

  const removeMcq = (index) => {
    let temp = MCQ.mcqs.filter((_, i) => i !== index);
    setMcq({
      ...MCQ,
      mcqs: temp,
    });
    temp = correctAnswer.filter((_, i) => i !== index);
    setCorrectAnswer(temp);
  };

  return (
    <CCard>
      <CCardHeader>{`${id ? "Edit" : "Add"}`} MCQ</CCardHeader>
      <CCardBody>
        <CForm onSubmit={addMcq}>
          <CFormGroup>
            <CLabel>Title</CLabel>
            <CInput
              name="title"
              type="text"
              value={MCQ.title}
              onChange={handleChange}
              placeholder="Title"
              required
            />
          </CFormGroup>
          <CFormGroup>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <CButton color="info" variant="ghost" onClick={addOneMcq}>
                Add MCQ
              </CButton>
            </div>
          </CFormGroup>
          {MCQ.mcqs.map((mcq, index) => (
            <CCard>
              <CCardHeader>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Mcq {index + 1}</span>
                  {index !== 0 && (
                    <div>
                      <CButton
                        color="danger"
                        variant="ghost"
                        onClick={() => removeMcq(index)}
                      >
                        Delete MCQ
                      </CButton>
                    </div>
                  )}
                </div>
              </CCardHeader>
              <CCardBody>
                <CFormGroup>
                  <CLabel>Question</CLabel>
                  <CInput
                    name="question"
                    type="text"
                    placeholder="Question"
                    required
                    value={mcq.question}
                    onChange={(e) => {
                      const temp = MCQ.mcqs.map((m, i) =>
                        i === index
                          ? {
                              ...m,
                              question: e.target.value,
                            }
                          : m
                      );
                      setMcq({
                        ...MCQ,
                        mcqs: temp,
                      });
                    }}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CInputGroup>
                    {mcq.answers.map((answer, answer_index) =>
                      answers(answer, index, answer_index)
                    )}
                  </CInputGroup>
                </CFormGroup>
                <CFormGroup>
                  <CLabel>Correct Answer</CLabel>
                  <CInput
                    name="correctAnswer"
                    placeholder="Correct Answer"
                    value={correctAnswer[index]}
                    onChange={(e) => {
                      const temp = correctAnswer.map((ans, i) =>
                        i !== index ? ans : e.target.value
                      );
                      setCorrectAnswer(temp);
                    }}
                    required
                  />
                </CFormGroup>
              </CCardBody>
            </CCard>
          ))}

          {loading ? (
            <CSpinner size="small" color="info" />
          ) : (
            <CButton type="submit" color="success" disabled={loading}>
              {`${id ? "Edit" : "Add"}`}
            </CButton>
          )}
        </CForm>
      </CCardBody>
    </CCard>
  );
};

export default AddMCQ;
