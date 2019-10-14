module.exports = (positionId) => {
    const { spawnSync } = require('child_process')
    let predictions = spawnSync('python3', ['../sorting_script.py',positionId], {
      stdio: 'pipe',
      encoding: 'utf-8' 
    })    
    return predictions.output[1]
}

//  getPredictions
