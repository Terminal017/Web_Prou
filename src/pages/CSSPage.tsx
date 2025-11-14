import VocabularyTable from '../components/VocabularyTable'
// 替换旧的聚合文件导入
import cssData from '../data/css.json'
import type { VocabularyItem } from '../types/vocabulary'
import './Page.css'

export default function CSSPage() {
  const items = cssData as VocabularyItem[] // 扁平数组

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>CSS词汇</h1>
      </div>
      <VocabularyTable items={items} />
    </div>
  )
}
