import * as xlsx from 'xlsx';


function main(){
  const filename = "./src/target-cell.xlsx"
  const workbook = xlsx.readFile(filename, {});
  // 첫 번째 시트 이름
  const sheetName = workbook.SheetNames[0];

  // 시트 이름에 따른 정보
  const sheet = workbook.Sheets[sheetName];
  // json 형태로 데이터 표시
  const data = xlsx.utils.sheet_to_json(sheet);
  console.log(sheetName)
  console.log(data)
}

main()