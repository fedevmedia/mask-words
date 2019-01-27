export const maskWords = (content, words) =>
  content.replace(new RegExp(words.join("|"), "ig"), "*****");
