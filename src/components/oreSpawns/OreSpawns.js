import React from 'react'
import './oreSpawns.css'

const OreSpawns = ({ data }) => {

  return (
    <div className='ore--outer--container'>
      {Object.keys(data).map(ore =>
        <div className='ore--container'>
          <div className='ore--spawn--container'>
            <h4 className='ore--name'>{ore}:</h4>
            <h4 className='ore--rates--container'>{Object.keys(data[ore]["Spawn Rates"]).map(rate => <h5 className='ore--rates'>{rate}: {data[ore]["Spawn Rates"][rate]}</h5>)}</h4>
          </div>
          <div className='ore--location--container'>
            <h4 className='ore--name'>Locations:</h4>
            <h4 className='ore--locations--container'>{Object.keys(data[ore]["Spawn Locations"]).map(location => <h5 className='ore--locations'>{location}: {data[ore]["Spawn Locations"][location]}</h5>)}</h4>
          </div>
        </div>
      )}
    </div>
  )
}

export default OreSpawns