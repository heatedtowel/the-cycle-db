import { useState } from 'react';
import cycleDB from './theCycleDb.json'
import './App.css';

function App() {
  let [category, setCategory] = useState('')
  let [armorPiece, setArmorPiece] = useState(null)
  let [rarity, setRarity] = useState(null)
  let [armorType, setArmorType] = useState(null)

  const categoryChange = (value) => {
    setCategory(value)
    setArmorPiece(null)
    setRarity(null)
    setArmorType(null)
  }

  const armorRarityBtn = (value) => {
    if (category === 'armor' && (value === 'epic' || value === 'exotic' || value === 'legendary')) {
      setArmorType('normal')
      setRarity(value)
      return
    }
    setRarity(value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='main--container'>
          <div>
            <div>
              <h3>Choose a Category:</h3>
              <div className='btn--container'>
                {Object.keys(cycleDB).map((value) =>
                  <button
                    onClick={() => categoryChange(value)}
                  >{value}
                  </button>
                )}
              </div>
            </div>

            {(category) &&
              <div>
                <h3>{category}</h3>
                <div className='btn--container'>
                  {category && Object.keys(cycleDB[category]).map((value) =>
                    <button onClick={() => setArmorPiece(value)}>{value}</button>)}
                </div>
              </div>
            }

            {(category && armorPiece) &&
              <div>
                <h3>Rarity:</h3>
                <div className='btn--container'>
                  {armorPiece && Object.keys(cycleDB[category][armorPiece]).map((value) => <button onClick={() => armorRarityBtn(value)}>{value}</button>)}
                </div>
              </div>
            }

            {(category === 'Armor' && armorPiece && rarity) &&
              <div>
                <h3>Armor Type</h3>
                <div className='btn--container'>
                  {(armorPiece && rarity) && Object.keys(cycleDB[category][armorPiece][rarity]).map((value) => <button onClick={() => setArmorType(value)
                  }>{value}</button>)}
                </div>
              </div>
            }
          </div>
          {(category && armorPiece && armorType && rarity) &&
            <div className='item--container'>
              {Object.keys(cycleDB[category][armorPiece][rarity][armorType]).map(components =>
                <div className='item'>
                  <h3>{components}: {cycleDB[category][armorPiece][rarity][armorType][components]}</h3>
                </div>
              )}
            </div>}
          {(category && armorPiece === 'backpack' && rarity) &&
            <div className='item--container'>
              {Object.keys(cycleDB[category][armorPiece][rarity]).map(components =>
                <div className='item'>
                  <h3 className='item--name'>{components}:</h3>
                  <h3 className='item--ammount'>{cycleDB[category][armorPiece][rarity][components]}</h3>
                </div>
              )}
            </div>}
        </div>
      </header>
    </div >
  );
}

export default App;
