interface Idea {
  keyWord: string;
}

// 키워드를 쉼표로 분리하는 함수
const splitKeywords = (keyWords: string): string[] => {
  // 쉼표로 문자열을 분리하고 양쪽 공백을 제거한 후 반환
  return keyWords.split(",").map((keyWord) => keyWord.trim());
};

export default splitKeywords;
