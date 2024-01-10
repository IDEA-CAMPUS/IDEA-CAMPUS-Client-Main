interface Idea {
  keyword: string;
}

const idea: Idea = {
  keyword: "키워드1, 2, 3",
};

// 키워드를 쉼표로 분리하는 함수
const splitKeywords = (keywords: string): string[] => {
  // 쉼표로 문자열을 분리하고 양쪽 공백을 제거한 후 반환
  return keywords.split(",").map((keyword) => keyword.trim());
};

// Idea 객체의 키워드를 분리
const ideaKeywords = splitKeywords(idea.keyword);

console.log(ideaKeywords); // ['키워드1', '2', '3']

export default splitKeywords;
