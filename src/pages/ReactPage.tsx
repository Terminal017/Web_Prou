import VocabularyTable from '../components/VocabularyTable';
import vocabularyData from '../data/vocabulary.json';
import { VocabularyItem } from '../types/vocabulary';
import './Page.css';

export default function ReactPage() {
  const items = vocabularyData.react as VocabularyItem[];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>React词汇</h1>
      </div>
      <VocabularyTable items={items} />
    </div>
  );
}

