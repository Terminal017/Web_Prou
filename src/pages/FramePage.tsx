import VocabularyTable from '../components/VocabularyTable'
import frameData from '../data/frame.json'
import type { VocabularyItem } from '../types/vocabulary'
import './Page.css'

export default function FramePage() {
  const items = frameData as VocabularyItem[]
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Frame词汇</h1>
      </div>
      <VocabularyTable items={items} />
    </div>
  )
}
