import { useState } from 'react';
import './App.css';

const DB = [
  {
    id: 1,
    content: "menu01",
    link: "/s1",
    submenu: [
      { content: "smenu011", link: "/1" },
      { content: "smenu012", link: "/2" },
      { content: "smenu013", link: "/3" },
    ]
  },
  {
    id: 2,
    content: "menu02",
    link: "/s2",
    submenu: [
      { content: "smenu021", link: "/1" },
      { content: "smenu022", link: "/2" },
      { content: "smenu023", link: "/3" },
    ]
  },
  {
    id: 3,
    content: "menu03",
    link: "/s3",
    submenu: [
      { content: "smenu031", link: "/1" },
      { content: "smenu032", link: "/2" },
      { content: "smenu033", link: "/3" },
    ]
  },
]

function App() {
  const [CB, setCB] = useState("");
  const [TG, setTG] = useState(true);
  return (
    <header>
      <h1 className={CB} onClick={() => setCB('on')}>LOGO</h1>
      <h2 className={`ggg ${TG ? 'on' : ''}`}>toggle class</h2>
      <button onClick={() => setTG(!TG)}>class toggle</button>
      <nav className='GNB'>
        <ul>
          {
            DB.map((it, idx) => <li key={idx}>
              <a href={it.link}>{it.content}</a>
              <ul className='smenu'>
                {
                  it.submenu.map((smenu, idx) => <li key={idx}>
                    <a href={smenu.link}>{smenu.content}</a>
                  </li>)
                }
              </ul>
            </li>)
          }
        </ul>
      </nav>
    </header>
  );
}

export default App;
