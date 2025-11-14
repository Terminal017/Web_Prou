import VocabularyTable from '../components/VocabularyTable'
// 替换已删除的聚合数据文件
import jsData from '../data/js.json'
import type { VocabularyItem } from '../types/vocabulary'
import './Page.css'

export default function JSPage() {
  const items = jsData as VocabularyItem[]

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>JS词汇</h1>
      </div>
      <VocabularyTable items={items} />
    </div>
  )
}
