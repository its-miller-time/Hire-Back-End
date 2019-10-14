module.exports = (positionId) => {
  console.log('getPredictionsFired')
    const { spawnSync } = require('child_process')
    let predictions = spawnSync('python', ['sorting_script.py',positionId], {
      stdio: 'pipe',
      encoding: 'utf-8' 
    })    
    console.log(predictions)
    return predictions.output[1]
}

//  getPredictions
