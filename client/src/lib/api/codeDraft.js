import axios from "@/lib/axios"; 

export const saveCodeDraft = async ({ problemId, code, language }) => {
  return await axios.post(`/codedraft/save`, { problemId, code, language });
};

export const getCodeDraft = async (problemId, language) => {
  const res =  await axios.get(`/codedraft/${problemId}/${language}`);
  return res.data;
};

