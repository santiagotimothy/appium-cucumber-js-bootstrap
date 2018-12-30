
function getAppPath(isAndroid) {
  if (isAndroid) {
    return `${process.cwd()}/nixplayQA.apk`
  } else {
    return `${process.cwd()}/ios/build/Build/Products/Debug-iphonesimulator/nixplayQA.app`
  }

}

exports.helpers = {
  getAppPath,
}