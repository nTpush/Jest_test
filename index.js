const {getChangedFilesForRoots} = require('jest-changed-files') ;

getChangedFilesForRoots(['./'], { lastCommit: true }).then((result) => {
  // console.log(result.changedFiles)
  console.log(result.repos)
})