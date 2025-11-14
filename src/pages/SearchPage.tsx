import { useMemo, useState } from 'react'
import VocabularyTable from '../components/VocabularyTable'
import htmlData from '../data/html.json'
import cssData from '../data/css.json'
import jsData from '../data/js.json'
import reactData from '../data/react.json'
import browserData from '../data/browser.json'
import frameData from '../data/frame.json'
import otherData from '../data/other.json'
import type { VocabularyItem } from '../types/vocabulary'
import './Page.css'

export default function SearchPage() {
  // 汇总所有分类数据
  const allItems: VocabularyItem[] = useMemo(() => {
    return [
      ...(htmlData as VocabularyItem[]),
      ...(cssData as VocabularyItem[]),
      ...(jsData as VocabularyItem[]),
      ...(reactData as VocabularyItem[]),
      ...(browserData as VocabularyItem[]),
      ...(frameData as VocabularyItem[]),
      ...(otherData as VocabularyItem[]),
    ]
  }, [htmlData, cssData, jsData, reactData, browserData, frameData, otherData])

  // 去重：防止不同分类出现相同单词导致 React key 冲突 (await, async, closure, promise, module, priority 等)
  const uniqueItems = useMemo(() => {
    const map = new Map<string, VocabularyItem>()
    for (const item of allItems) {
      const key = item.word.toLowerCase()
      if (!map.has(key)) {
        map.set(key, item) // 只保留首次出现的定义，可根据需要后续合并 meaning
      }
    }
    return Array.from(map.values())
  }, [allItems])

  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isComposing, setIsComposing] = useState(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    // 显式前缀匹配：使用 slice 而非 startsWith 以便调试时更直观
    return uniqueItems.filter((item) => {
      const w = item.word.toLowerCase()
      return w.slice(0, q.length) === q
    })
  }, [uniqueItems, query])

  return (
    <div className="page-container">
      <div className="page-inner">
        {/* 搜索区 */}
        <div className="page-header">
          <h1>搜索</h1>
          <div className="search-bar-wrapper">
            <input
              className="search-input"
              type="text"
              value={inputValue}
              onChange={(e) => {
                const v = e.target.value
                setInputValue(v)
                if (!isComposing) setQuery(v)
              }}
              onCompositionStart={() => setIsComposing(true)}
              onCompositionEnd={(e) => {
                setIsComposing(false)
                setQuery((e.target as HTMLInputElement).value)
              }}
              placeholder="输入前缀搜索 (仅匹配 word)"
              aria-label="搜索单词 (仅匹配 word 前缀)"
            />
          </div>
        </div>
        {filtered.length === 0 && query.trim() !== '' ? (
          <div className="no-results">未找到匹配结果</div>
        ) : null}
        {filtered.length > 0 ? <VocabularyTable items={filtered} /> : null}
      </div>
    </div>
  )
}
