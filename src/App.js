import { useState } from 'react';
import OreSpawns from './components/oreSpawns/OreSpawns';
import cycleDB from './theCycleDb.json'
import newdb from './newdb.json'
import './App.css';

function App() {
  var categories = ['Armor', 'Utilities'];

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

  const categoryButton = (value) => {
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
                <div className='btn--container'>
                  {categories.map((categorybtn) =>
                    <button
                      className='categorybtn'
                      data-active={category === categorybtn}
                      onClick={() => categoryChange(categorybtn)}
                    >
                      {categorybtn}
                    </button>
                  )}
                </div>
              </div>

              {(category) &&
                <div>
                  <h4 className='category--title'>{category}</h4>
                  <div className='btn--container'>
                    <select name="category" id="category-select" onChange={(e) => setArmorPiece(e.target.value)}>
                      <option selected value="">----</option>
                      {category && Object.keys(newdb[category]).map((value) =>
                        <option
                          value={value}
                        >{value}
                        </option>
                      )}
                    </select>
                  </div>
                </div>
              }

              {(category && armorPiece) &&
                <div>
                  <h4 className='rarity--title'>Rarity</h4>
                  <div className='btn--container'>
                    <select name="category" id="category-select" onChange={(e) => categoryButton(e.target.value)}>
                      <option selected value="">----</option>
                      {armorPiece && Object.keys(newdb[category][armorPiece]).map((value) =>
                        <option
                          value={value}
                        >{value}
                        </option>
                      )}
                    </select>
                  </div>
                </div>
              }

              {(category === 'Armor' && armorPiece && rarity) &&
                <div>
                  <h4 className='armor--type--title'>Armor Type</h4>
                  <div className='btn--container'>
                    <select name="category" id="category-select" onChange={(e) => setArmorType(e.target.value)}>
                      <option selected value="">----</option>
                      {(armorPiece && rarity) && Object.keys(cycleDB[category][armorPiece][rarity]).map((value) =>
                        <option
                          value={value}
                        >{value}
                        </option>
                      )}
                    </select>
                  </div>
                </div>
              }

              {(category && armorPiece && armorType && rarity) &&
                <div className='item--container'>
                  <h3 className='materials--title'>Materials</h3>
                  {Object.keys(cycleDB[category][armorPiece][rarity][armorType]).map(components =>
                    <div className='item'>
                      <h5 className='components--title'>{components}</h5>
                      <h5 className='components--amount'>{cycleDB[category][armorPiece][rarity][armorType][components]}</h5>
                    </div>
                  )}
                </div>
              }
            </div>

            {(category && armorPiece === 'Backpack' && rarity) &&
              <div className='item--container'>
                <img src={newdb[category][armorPiece][rarity]["image"]} alt="" />
                <h3>Materials</h3>
                <div className='item--inner--conainer'>
                  {Object.keys(cycleDB[category][armorPiece][rarity]).map(components =>
                    <div className='item'>
                      <h4 className='components--title'>{components}</h4>
                      <h4 className='components--amount'>{cycleDB[category][armorPiece][rarity][components]}</h4>
                    </div>
                  )}
                </div>
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
