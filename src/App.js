import { useState } from 'react';
import OreSpawns from './components/oreSpawns/OreSpawns';
import cycleDB from './theCycleDb.json'
import newdb from './newdb.json'
import './App.css';

function App() {
  let [category, setCategory] = useState('')
  let [armorPiece, setArmorPiece] = useState(null)
  let [rarity, setRarity] = useState(null)
  let [armorType, setArmorType] = useState(null)


  const filter = () => {

    let filteredRarity = newdb['Utilities']["backpack"].filter((el) => el.rarity === 'rare')

    console.log(filteredRarity[0].rarity)

    if (filteredRarity['Crafting Materials']) {
      console.log('true')
    }

  }

  filter()

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
              <h4>Choose a Category:</h4>
              <div className='btn--container'>
                {Object.keys(newdb).map((value) =>
                  <button
                    onClick={() => categoryChange(value)}
                  >{value}
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
                <h4>Rarity:</h4>
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
                {Object.keys(cycleDB[category][armorPiece][rarity][armorType]).map(components =>
                  <div className='item'>
                    <h4>{components}: {cycleDB[category][armorPiece][rarity][armorType][components]}</h4>
                  </div>
                )}
              </div>}
            {(category && armorPiece === 'backpack' && rarity) &&
              <div className='item--container'>
                {Object.keys(cycleDB[category][armorPiece][rarity]).map(components =>
                  <div className='item'>
                    <h4 className='item--name'>{components}:</h4>
                    <h4 className='item--ammount'>{cycleDB[category][armorPiece][rarity][components]}</h4>
                  </div>
                )}
              </div>
            }
          </div>
          <OreSpawns data={newdb.Mining} />
        </div>
      </header>
    </div >
    // <div className="App">
    //   <header className="App-header">
    //     <div className='main--container'>
    //       <div>
    //         <div>
    //           <h4>Choose a Category:</h4>
    //           <div className='btn--container'>
    //             {Object.keys(cycleDB).map((value) =>
    //               <button
    //                 onClick={() => categoryChange(value)}
    //               >{value}
    //               </button>
    //             )}
    //           </div>
    //         </div>

    //         {(category) &&
    //           <div>
    //             <h4>{category}</h4>
    //             <div className='btn--container'>
    //               {category && Object.keys(cycleDB[category]).map((value) =>
    //                 <button onClick={() => setArmorPiece(value)}>{value}</button>)}
    //             </div>
    //           </div>
    //         }

    //         {(category && armorPiece) &&
    //           <div>
    //             <h4>Rarity:</h4>
    //             <div className='btn--container'>
    //               {armorPiece && Object.keys(cycleDB[category][armorPiece]).map((value) => <button onClick={() => armorRarityBtn(value)}>{value}</button>)}
    //             </div>
    //           </div>
    //         }

    //         {(category === 'Armor' && armorPiece && rarity) &&
    //           <div>
    //             <h4>Armor Type</h4>
    //             <div className='btn--container'>
    //               {(armorPiece && rarity) && Object.keys(cycleDB[category][armorPiece][rarity]).map((value) => <button onClick={() => setArmorType(value)
    //               }>{value}</button>)}
    //             </div>
    //           </div>
    //         }
    //       </div>
    //       {(category && armorPiece && armorType && rarity) &&
    //         <div className='item--container'>
    //           {Object.keys(cycleDB[category][armorPiece][rarity][armorType]).map(components =>
    //             <div className='item'>
    //               <h4>{components}: {cycleDB[category][armorPiece][rarity][armorType][components]}</h4>
    //             </div>
    //           )}
    //         </div>}
    //       {(category && armorPiece === 'backpack' && rarity) &&
    //         <div className='item--container'>
    //           {Object.keys(cycleDB[category][armorPiece][rarity]).map(components =>
    //             <div className='item'>
    //               <h4 className='item--name'>{components}:</h4>
    //               <h4 className='item--ammount'>{cycleDB[category][armorPiece][rarity][components]}</h4>
    //             </div>
    //           )}
    //         </div>}
    //     </div>
    //   </header>
    // </div >
  );
}

export default App;
