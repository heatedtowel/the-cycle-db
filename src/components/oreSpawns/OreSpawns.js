import React from 'react'
import './oreSpawns.css'

const OreSpawns = ({ Mining }) => {

  return (
    <div className='ore--outer--container'>
      {Object.keys(Mining).map(ore =>
        <div className='ore--container'>
          <div className='ore--spawn--container'>
            <h4 className='ore--name'>{ore}</h4>
            <div className='ore--rates--container'>
              {Object.keys(Mining[ore]["Spawn Rates"]).map(rate =>
                <div className='ore--rates--inner--container'>
                  <h5 className='ore--rates--name'>{rate}</h5>
                  <h5 className='ore--rates--amount'>{Mining[ore]["Spawn Rates"][rate]}</h5>
                </div>
              )}
            </div>
          </div>
          <div className='ore--location--container'>
            <div className='location--title--container'>
              <h4 className='ore--location'>Location</h4>
              <h4 className='ore--spawn'>Spawns</h4>
            </div>
            <div className='ore--locations--container'>{Object.keys(Mining[ore]["Spawn Locations"]).map(location =>
              <div className='ore--locations--inner--container'>
                <h5 className='ore--locations--name'>{location}</h5>
                <h5 className='ore--locations--amount'>{Mining[ore]["Spawn Locations"][location]}</h5>
              </div>)}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default OreSpawns