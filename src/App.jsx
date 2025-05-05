import React from 'react';
import './App.css'; // 全体のCSSをインポート
import SelectionButton from './SelectionButton'; // ボタンコンポーネントをインポート
import { BsPeopleFill, BsPersonFill, BsBoxSeam } from 'react-icons/bs'; // react-iconsからアイコンをインポート

function App() {
  // ボタンがクリックされたときの処理（例としてコンソールに出力）
  const handleButtonClick = (type) => {
    console.log(`${type} が選択されました。担当者に通知します...`);
    // ここで実際の通知処理などを実装します
    alert(`${type} が選択されました。\n担当者へ通知しました。`);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>来訪者受付</h1>
        <p>ご用件を選択してください</p>
      </header>

      <main className="main-content">
        {/* SelectionButtonコンポーネントを使用 */}
        <SelectionButton
          icon={<BsPeopleFill />} // アイコンコンポーネントを渡す
          text="打ち合わせ"
          color="blue" // 色を指定
          onClick={() => handleButtonClick('打ち合わせ')} // クリック時の処理を渡す
        />
        <SelectionButton
          icon={<BsPersonFill />}
          text="面接"
          color="green"
          onClick={() => handleButtonClick('面接')}
        />
        <SelectionButton
          icon={<BsBoxSeam />}
          text="配達・その他"
          color="orange"
          onClick={() => handleButtonClick('配達・その他')}
        />
      </main>

      <footer className="footer">
        <p>ボタンを押すと担当者に通知されます</p>
      </footer>
    </div>
  );
}

export default App;