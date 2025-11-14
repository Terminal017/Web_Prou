import VocabularyTable from '../components/VocabularyTable'
// 替换已删除的聚合数据文件
import reactData from '../data/react.json'
import type { VocabularyItem } from '../types/vocabulary'
import './Page.css'

export default function ReactPage() {
  const items = reactData as VocabularyItem[]

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>React词汇</h1>
      </div>
      <VocabularyTable items={items} />
    </div>
  )
}
