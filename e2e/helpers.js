
function getAppPath(isAndroid) {
  if (isAndroid) {
    return `${process.cwd()}/nixplayQA.apk`
  } else {
    return `${process.cwd()}/NixplayRND.app`
  }

}

exports.helpers = {
  getAppPath,
}