interface KeyrwordFormData {
  keyWord1: string;
  keyWord2: string;
  keyWord3: string;
}

export const getCombinedkeyWords = (keyWordData: KeyrwordFormData) => {
  return `${keyWordData.keyWord1}, ${keyWordData.keyWord2}, ${keyWordData.keyWord3}`;
};
