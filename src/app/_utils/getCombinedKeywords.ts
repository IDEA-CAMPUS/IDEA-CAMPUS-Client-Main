interface KeyrwordFormData {
  keyword1: string;
  keyword2: string;
  keyword3: string;
}

export const getCombinedKeywords = (keywordData: KeyrwordFormData) => {
  return `${keywordData.keyword1}, ${keywordData.keyword2}, ${keywordData.keyword3}`;
};
