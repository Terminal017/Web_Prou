import VocabularyTable from '../components/VocabularyTable'
import otherData from '../data/other.json'
import type { VocabularyItem } from '../types/vocabulary'
import './Page.css'

export default function OtherPage() {
  const items = otherData as VocabularyItem[]
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Other词汇</h1>
      </div>
      <VocabularyTable items={items} />
    </div>
  )
}
