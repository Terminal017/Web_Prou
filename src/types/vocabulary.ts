export interface VocabularyItem {
  word: string
  ipa: string
  meaning: string
}

export interface VocabularyData {
  html: VocabularyItem[]
  css: VocabularyItem[]
  js: VocabularyItem[]
  react: VocabularyItem[]
  browser: VocabularyItem[]
  frame: VocabularyItem[] // 新增框架类
  other: VocabularyItem[] // 新增其它类
}
