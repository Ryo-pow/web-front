import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="card">
      <h1>Reactカウンター</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="名前を入力"
          style={{ padding: '10px', width: '160px' }}
        />

        <p>こんにちは、{name ? name : '名無しさん'} さん!</p>
      </div>

      <div style={{
        fontSize: '50px',
        fontWeight: 'bold',
        color: count > 10 ? 'orange' : '#333',
       }}>
        {count}
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={ () => setCount(count + 1)}>
          増やす
        </button>

        <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>
          減らす
        </button>
        <div style={{ marginTop: '20px', height: '30px' }}>
          { count >= 5 ? '🎉 すごい！' : '' }
        </div>
      </div>
    </div>
  );
  
}

export default App;