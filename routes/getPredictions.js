module.exports = (positionId) => {
    const { spawnSync } = require('child_process')
    let predictons = spawnSync('python', ['sorting_script.py',positionId], {
      stdio: 'pipe',
      encoding: 'utf-8' 
    })
    return predictons.output[1]
}

//  getPredictions
