import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import List from './components/Principal/List/List';
import Form from './components/Secondary/Form/Form';
import { Sub } from './types.d';

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    /* const fetchSubs = (): promise<any> => {
      return
      fetch('https://randomuser.me/api/?results=5?nat=ch').then(res => res.json())
    }
      .then(subs => {
        console.log(subs)
        setSubs(subs.results)
      }) */
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub]);
    setNewSubsNumber(n => n = 1)
  }

  return (
    <div className="App" ref={divRef}>
      <h1>midu subs</h1>
      <List subs={subs} />
      New Subs: {newSubsNumber}
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
