import * as xlsx from 'xlsx';

//재고
type Inventory = {
  index: string
  product: {
      name: string
      id: string
      color: string
      size: string
  }
  amount: number
}

const loadXlsxThenConvert = (fileName: string) =>{
  const workbook = xlsx.readFile(fileName, {});
  // 첫 번째 시트 이름
  const sheetName = workbook.SheetNames[0];

  // 시트 이름에 따른 정보
  const sheet = workbook.Sheets[sheetName];

  // csv로 변환
  const csv = xlsx.utils.sheet_to_csv(sheet);

  const parseWithLine = csv.split("\n")
  const parseWithComma = parseWithLine.map((line:string) => {
    return line.split(",")
  })
  const convertRawToJson = parseWithComma.map((raw :Array<string>) => {
    const productName = raw[1].split("[")[0].trim()
    const tempParsedRaw = raw[1].split("[")[1].split("]")[0].split(" ")
    return {
      index: raw[0],
      product: {
        name:productName,
        id:tempParsedRaw[0],
        color:tempParsedRaw.slice(1, tempParsedRaw.length - 1).join(" "),
        size:tempParsedRaw[tempParsedRaw.length - 1],
      },
      amount: +raw[2]
    }
  })

  return convertRawToJson
}

const getProductSet = (inventoris: Array<Inventory>, target: "name" | "color" | "size" | "id") => {
  return [...new Set(inventoris.map((inventory) => inventory.product[target]))]
}

const getLessProduct = (lte: number, inventoris: Array<Inventory>) =>{
  return inventoris.filter(inventory =>{
    return inventory.amount <= lte
  })
}

function main(){
  const fileName = "./src/target-cell.xlsx"
  const inventoris = loadXlsxThenConvert(fileName)
  const lessInventoris = getLessProduct(50, inventoris)
  // console.log(getProductSet(lessInventoris, "color"))
  // console.log(getProductSet(lessInventoris, "id"))
  // console.log(getProductSet(lessInventoris, "name"))
  // console.log(getProductSet(lessInventoris, "size"))
  // console.log(lessInventoris)
}

main()