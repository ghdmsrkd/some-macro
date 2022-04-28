const readline = require('readline');
const fs = require('fs');

const getDateFormat = (addDate) => {
  const now = new Date();
  now.setDate(now.getDate() + addDate);
  return now.toISOString().split('T')[0].split('-').join('')
}

const isTargetFile = (fileName) => {
  if (fileName.length < 8) return false
  if (fileName.split(" ")[0].length !== 8) return false
  if (isNaN(+fileName.split(" ")[0])) return false
  return true
}

const renameFiles = (addDate) => {
  fs.readdir("./", (err, files) => {
    if (err)
      console.log(err);
    else {
      console.log("target files:");
      files.forEach(file => {
        const fileNameParse = file.split(" ")
        if (isTargetFile(file)) {
          console.log(file)
          fs.renameSync(file, `${getDateFormat(addDate)} ${fileNameParse.slice(1, fileNameParse.length).join(" ")}`)
        }
      })
    }
  })
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('숫자를 입력해주세요. : ', (answer) => {
  if (!isNaN(+answer)) {
    renameFiles(+answer)
  }
  rl.close();
});