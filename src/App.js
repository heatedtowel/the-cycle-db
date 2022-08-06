import { useState } from 'react';
import OreSpawns from './components/oreSpawns/OreSpawns';
import cycleDB from './theCycleDb.json'
import newdb from './newdb.json'
import './App.css';

function App() {
  var categories = ['Armor', 'Utilities'];

  let [category, setCategory] = useState('')
  let [rarity, setRarity] = useState(null)
  let [armorPiece, setArmorPiece] = useState(null)
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
          <div className='item--outer--container'>
            <div>
              <div>
                <h4>Category</h4>
                <div className='btn--container'>
                  {categories.map((category) =>
                    <button
                      onClick={() => categoryChange(category)}
                    >{category}
                    </button>
                  )}
                </div>
              </div>

              {(category) &&
                <div>
                  <h4>{category}</h4>
                  <div className='btn--container'>
                    {category && Object.keys(newdb[category]).map((value) =>
                      <button onClick={() => setArmorPiece(value)}>{value}</button>)}
                  </div>
                </div>
              }

              {(category && armorPiece) &&
                <div>
                  <h4>Rarity</h4>
                  <div className='btn--container'>
                    {armorPiece && Object.keys(newdb[category][armorPiece]).map((value) => <button onClick={() => armorRarityBtn(value)}>{value}</button>)}
                  </div>
                </div>
              }

              {(category === 'Armor' && armorPiece && rarity) &&
                <div>
                  <h4>Armor Type</h4>
                  <div className='btn--container'>
                    {(armorPiece && rarity) && Object.keys(cycleDB[category][armorPiece][rarity]).map((value) => <button onClick={() => setArmorType(value)
                    }>{value}</button>)}
                  </div>
                </div>
              }

              {(category && armorPiece && armorType && rarity) &&
                <div className='item--container'>
                  <h2>Materials Needed</h2>
                  {Object.keys(cycleDB[category][armorPiece][rarity][armorType]).map(components =>
                    <div className='item'>
                      <h4>{components}: {cycleDB[category][armorPiece][rarity][armorType][components]}</h4>
                    </div>
                  )}
                </div>
              }
            </div>
            {(category && armorPiece === 'backpack' && rarity) &&
              <div className='item--container'>
                <img src={newdb[category][armorPiece][rarity]["image"]} alt="" />
                <h3>Materials Needed</h3>
                {Object.keys(cycleDB[category][armorPiece][rarity]).map(components =>
                  <div className='item'>
                    <h4>{components}: {cycleDB[category][armorPiece][rarity][components]}</h4>
                  </div>
                )}
              </div>
            }
          </div>
          <OreSpawns Mining={newdb.Mining} />
        </div>
      </header>
    </div >
  );
}

export default App;
