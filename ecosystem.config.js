var copydir = require('copy-dir')
module.exports = {
  apps: [{
    name: 'pgpcccoronanalysisfrontendpjct',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-100-25-191-1.compute-1.amazonaws.com',
      key: '/home/rakesh/rak/covid19.pem',
      ref: 'origin/master',
      repo: 'git@github.com:rvishwan/PGPCCCoronaAnalysisPjct.git',
      path: '/home/ubuntu/covid19projectfrontend',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    },
    production2: {
      user: 'ubuntu',
      host: 'ec2-3-236-102-91.compute-1.amazonaws.com',
      key: '/home/rakesh/rak/covid19.pem',
      ref: 'origin/master',
      repo: 'git@github.com:rvishwan/PGPCCCoronaAnalysisPjct.git',
      path: '/home/ubuntu/covid19projectfrontend',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
