export interface VocabularyItem {
  word: string;
  ipa: string;
  meaning: string;
}

export interface VocabularyData {
  html: VocabularyItem[];
  css: VocabularyItem[];
  js: VocabularyItem[];
  react: VocabularyItem[];
  browser: VocabularyItem[];
}

