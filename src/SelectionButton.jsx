import React from 'react';
import './SelectionButton.css'; // ボタン用のCSSをインポート

// propsで icon, text, color, onClick を受け取る
const SelectionButton = ({ icon, text, color, onClick }) => {
  // color propに基づいてクラス名を動的に生成
  const buttonClassName = `selection-button ${color}`;
  const iconContainerClassName = `icon-container ${color}`;

  return (
    // ボタン要素に変更し、onClickイベントハンドラを設定
    <button className={buttonClassName} onClick={onClick}>
      <div className={iconContainerClassName}>
        {icon} {/* react-iconsのコンポーネントをそのまま表示 */}
      </div>
      <span className="button-text">{text}</span>
    </button>
  );
};

export default SelectionButton;