function getPredictions() {
    const { spawnSync } = require('child_process')
    
    let predictons = spawnSync('python', ['sorting_script.py'], {
      stdio: 'pipe',
      encoding: 'utf-8' 
    })
    return predictons.output[1]
}

module.exports = getPredictions
