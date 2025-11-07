import VocabularyTable from '../components/VocabularyTable';
import vocabularyData from '../data/vocabulary.json';
import { VocabularyItem } from '../types/vocabulary';
import './Page.css';

export default function HTMLPage() {
  const items = vocabularyData.html as VocabularyItem[];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>HTML词汇</h1>
      </div>
      <VocabularyTable items={items} />
    </div>
  );
}

