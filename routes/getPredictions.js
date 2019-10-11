module.exports = (positionId) => {
    const { spawnSync } = require('child_process')
    let predictons = spawnSync('/usr/bin/python3', ['sorting_script.py',positionId], {
      stdio: 'pipe',
      encoding: 'utf-8' 
    })
    console.log("predictions",  predictons)
    return predictons.output[1]
}

//  getPredictions
