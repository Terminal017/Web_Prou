import { useState, useMemo, useLayoutEffect } from 'react';
import { VocabularyItem } from '../types/vocabulary';
import './VocabularyTable.css';

interface VocabularyTableProps {
  items: VocabularyItem[];
}

export default function VocabularyTable({ items }: VocabularyTableProps) {
  const [completedWords, setCompletedWords] = useState<Set<string>>(new Set());
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useLayoutEffect(() => {
    const pageContainer = document.querySelector('.page-container') as HTMLElement;
    if (pageContainer && scrollPosition > 0) {
      pageContainer.scrollTop = scrollPosition;
    }
  }, [scrollPosition, completedWords]);

  const toggleComplete = (word: string) => {
    const pageContainer = document.querySelector('.page-container') as HTMLElement;
    if (pageContainer) {
      setScrollPosition(pageContainer.scrollTop);
    }
    setCompletedWords((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(word)) {
        newSet.delete(word);
      } else {
        newSet.add(word);
      }
      return newSet;
    });
  };

  const speakWord = (word: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const sortedItems = useMemo(() => {
    const incomplete: VocabularyItem[] = [];
    const completed: VocabularyItem[] = [];

    items.forEach((item) => {
      if (completedWords.has(item.word)) {
        completed.push(item);
      } else {
        incomplete.push(item);
      }
    });

    const sortByFirstLetter = (a: VocabularyItem, b: VocabularyItem) => {
      return a.word.toLowerCase().localeCompare(b.word.toLowerCase());
    };

    incomplete.sort(sortByFirstLetter);
    completed.sort(sortByFirstLetter);

    return [...incomplete, ...completed];
  }, [items, completedWords]);

  return (
    <div className="vocabulary-table-container">
      <table className="vocabulary-table">
        <thead>
          <tr>
            <th>单词</th>
            <th>音标</th>
            <th>专业释义</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((item) => {
            const isCompleted = completedWords.has(item.word);
            return (
              <tr
                key={item.word}
                className={isCompleted ? 'completed' : ''}
              >
                <td className="word-cell">{item.word}</td>
                <td className="ipa-cell">{item.ipa}</td>
                <td className="meaning-cell">{item.meaning}</td>
                <td className="actions-cell">
                  <button
                    className="speak-button"
                    onClick={() => speakWord(item.word)}
                    aria-label={`发音 ${item.word}`}
                  >
                    发音
                  </button>
                  <button
                    type="button"
                    className={`complete-button ${isCompleted ? 'completed' : ''}`}
                    onClick={() => toggleComplete(item.word)}
                    aria-label={isCompleted ? '标记为未完成' : '标记为完成'}
                  >
                    {isCompleted ? '已完成' : '完成'}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

