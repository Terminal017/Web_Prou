import VocabularyTable from '../components/VocabularyTable'
// 替换已删除的聚合数据文件
import browserData from '../data/browser.json'
import type { VocabularyItem } from '../types/vocabulary'
import './Page.css'

export default function BrowserPage() {
  const items = browserData as VocabularyItem[]

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Browser词汇</h1>
      </div>
      <VocabularyTable items={items} />
    </div>
  )
}
