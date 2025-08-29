import axios from "../axios";

export const getAllProblems = async () => {
  const res = await axios.get("/problems");
  return res.data;
};

export const getProblemById = async (id) => {
  const res = await axios.get(`/problems/${id}`);
  return res.data;
};

export const generateHint = async ({ problemId, code, step }) => {
  const res = await axios.post(`/problems/${problemId}/hint`, {
    code,
    step,
  });
  return res.data; 
};

export const createProblem = async (problemData) => {
  const res = await axios.post("/problems", problemData, {
    withCredentials: true, 
  });
  return res.data;
};


export const runCode = async ({ problemId, language, code }) => {
  const res = await axios.post("/submissions/run", {
    problemId,
    language,
    code,
  });
  return res.data;
};

export const submitCode = async ({ problemId, language, code }) => {
  const res = await axios.post(
    `/submissions`,
    {
      problemId,  
      language,
      code,
    }
  );
  return res.data;
};


export const getUserSubmissionsForProblem = async (problemId) => {
  const res = await axios.get("/submissions/by-problem", {
    params: { problemId }, 
  });
  return res.data;
};


export const getSolvedProblems = async () => {
  const res = await axios.get("/users/me/solved", {
    withCredentials: true,
  });
  return res.data.solvedProblems; 
};

export const getActiveSubmissionDays = async () => {
  const res = await axios.get("/submissions/active-days");
  return res.data; 
};
