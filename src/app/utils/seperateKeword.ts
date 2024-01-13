interface Idea {
  keyWord: string;
}

// 키워드를 쉼표로 분리하는 함수
const splitkeyWords = (keyWord?: string | unknown): string[] => {
  if (typeof keyWord === "string") {
    // 쉼표로 문자열을 분리하고 양쪽 공백을 제거한 후 반환
    return keyWord.split(",").map((keyWord) => keyWord.trim());
  } else {
    // keyWords가 undefined인 경우 빈 배열 반환 또는 다른 처리를 수행할 수 있습니다.
    return [];
  }
};

export default splitkeyWords;
