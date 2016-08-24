var _ = require('lodash')

const baseSrc = '/mnt/handle/workspace/sfsf/trunk/au-v4/au-V4-web/src/main/webapp/ui/gm'
const baseDist = '/mnt/handle/workspace/sfsf/trunk/jboss-sfs/server/main/deploy/main-sfv4.ear/sfv4.war/ui/gm'


var files = [
  '/css/v12/tgm_cascade_link_wizard_v12.css',
  '/js/v12/tgm_cascade_link_wizard_v12.js',
  '/js/fbobj5.js'
]

var  watchFiles = _.map(files, function(src) {
  var pathArr = src.split('/')
  pathArr.pop()
  var distPath = pathArr.join('/')
  return {
    src: `${baseSrc}${src}`,
    dist: `${baseDist}${distPath}`
  }
})

module.exports =  {
  watchFiles
}

