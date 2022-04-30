import { getProductSet } from "./main"
import { Inventory } from "./types"

export const colorToKR = (color: string) : string => {
  const colorMap : any = {
    "WHITE": "화이트",
    "MOKUGRAY": "모쿠 그레이",
    "BLACK": "블랙",
    "RED": "레드",
    "PINK": "핑크",
    "PURPLE": "퍼플",
    "ORANGE": "오렌지",
    "GREEN": "그린",
    "NAVY": "네이비",
    "ROYAL BLUE": "로얄 블루",
    "BURGUNDY": "버건디",
    "LIGHT PINK": "라이트 핑크",
    "LIGHT BLUE": "라이트 블루",
    "HOT PINK": "핫핑크",
    "DAISY": "데이지",
    "BRIGHT GREEN": "브라이트 그린",
    "MINT": "민트",
    "TURQUOISE": "타코이즈",
    "ASH": "애쉬",
    "IVORY": "아이보리",
    "DENIUM": "데님",
    "OLIVE": "올리브",
    "CHARCOAL": "차콜",
    "FOREST": "포레스트",
    "LIGHT YELLOW": "라이트 옐로",
    "SILVER GRAY": "실버 그레이",
    "LIME": "라임",
    "JAPAN BLUE": "재팬 블루",
    "LIGHT PURPLE": "라이트 퍼플",
    "Purple": "퍼플",
    "Army Green": "아미 그린",
    "Burgundy": "버건디",
    "Chacoal": "차콜",
    "CAMEL": "카멜",
    "DUSTY PINK": "더스트 핑크",
    "DARK BROWN": "다크 브라운",
    "DUSTY BLUE": "더스트 블루",
    "ARMY GREEN": "아미 그린",
    "BLUE": "블루",
    "OATMEAL": "오트밀",
    "DEEP NAVY": "딥 네이비",
    "BRIGHT RED": "브라이트 레드",
    "MOKU GRAY": "모쿠 그레이",
    "GRAY": "그레이",
    "DARK GRAY": "다크 그레이",
    "Matte Black": "매트 블랙",
    "MIX GRAY": "믹스 그레이",
    "MIX BLUE": "믹스 블루",
    "MIX RED": "믹스 레드",
    "MIX PURPLE": "믹스 퍼플",
    "MINT GREEN": "민트 그린",
    "BALCK": "블랙",
    "LIGHT GREEN": "라이트 그린",
    "SAX": "삭스",
    "NAVY * YELLOW": "네이비 x 옐로우",
    "BLACK * TURQUOISE": "블랙 x 타코이즈",
    "LIGHT BLUE * ROYAL BLUE": "라이트 블루 x 로얄 블루",
    "LIGHT PINK * HOT PINK": "라이트 핑크 x 핫핑크",
    "NAVY * HOT PINK": "네이비 x 핫핑크",
    "WHITE * RED": "화이트 x 레드",
    "WHITE * ROYAL BLUE": "화이트 x 로얄 블루",
    "LIGHTPINK": "라이트핑크",
    "LIGHTBLUE": "라이트블루",
    "NAVY*YELLOW": "네이비 x 옐로우",
    "BLACK*TURQUOISE": "블랙 x 타코이즈",
    "LIGHT BLUE*ROYAL BLUE": "라이트 블루 x 로얄 블루",
    "LIGHT PINK*HOT PINK": "라이트 핑크 x 핫핑크",
    "NAVY*HOT PINK": "네이비 x 핫핑크",
    "WHITE*RED": "화이트 x 레드",
    "WHITE* RED": "화이트 x 레드",
    "WHITE*ROYAL BLUE": "화이트 x 로얄 블루",
    "White*ROYAL BLUE": "화이트 x 로얄 블루",
    "NATURAL": "네추럴",
    "Turquoise": "터쿼이즈",
    "Natural": "네추럴",
    "Light Blue": "라이트 블루",
    "Hot Pink": "핫핑크",
    "Natural x Turquoise": "네추럴 x 터쿼이즈",
    "Natural x Hot pink": "네추럴 x 핫핑크",
    "Natural x Black": "네추럴 x 블랙",
    "Natural x Navy": "네추럴 x 네이비"
  }
  return colorMap[color]
}


export const sizeFormat = (size: string) : string => {
  const sizeMap : any = {
    "S": "S",
    "M": "M",
    "L": "L",
    "XL": "XL",
    "150": "150호",
    "160": "160호",
    "XXL": "2XL",
    "110": "110호",
    "120": "120호",
    "130": "130호",
    "140": "140호",
    "XXXL": "3XL",
    "2XL": "2XL",
    "3XL": "3XL",
    "XS": "XS",
    "LL": "LL",
    "3L": "3L",
    "SS": "SS",
    "100": "100호",
    "WM": "WM",
    "4L": "4L",
    "5L": "5L",
    "SM": "SM"
  }
  return sizeMap[size]
}

export const formatIdToName = (id: string) : string => {
  const idtoNameMap : any = {
    "00083-BBT": "라이트 라운드 티셔츠",
    "00085-CVT": "베이직 라운드 티셔츠",
    "00086-DMT": "스탠다드 라운드 티셔츠 (20수)",
    "00102-CVL": "베이직 라운드 긴팔 티셔츠(17수)",
    "00113-BCV": "오버핏 라운드 티셔츠 (17수)",
    "00115-CNS": "민소매 티셔츠 (17수)",
    "00141-NVP": "베이직 폴로셔츠(주머니 없음)",
    "00148-HVT": "헤비 라운드 티셔츠(14수)",
    "00216-MLH": "후드티",
    "00217-MLZ": "후드 집업",
    "00218-MLP": "쮸리 팬츠",
    "00219-MLC": "맨투맨",
    "00220-MHP": "쮸리 하프 팬츠",
    "00238-RFJ": "리플렉트 플리스 자켓",
    "00300-ACT": "드라이 라운드 티셔츠",
    "00302-ADP": "드라이 폴로 셔츠",
    "00304-ALT": "드라이 롱 슬리브 티셔츠",
    "00313-ABN": "드라이 버튼다운 폴로셔츠",
    "00315-AYB": "드라이 레이어드 버튼다운 폴로셔츠 (주머니 있음)",
    "00325-ACP": "드라이 하프 팬츠",
    "00330-AVP": "드라이 폴로셔츠 (주머니 있음)",
    "00331-ABP": "드라이 버튼 다운 폴로셔츠",
    "00335-ALP": "드라이 긴팔 폴로셔츠",
    "00338-AMZ": "드라이 집업 파카",
    "00339-AYP": "드라이 레이어드 폴로 셔츠 (주머니 있음)",
    "00342-ASZ": "헤비 드라이 후드 집업",
    "00346-AFC": "드라이 기모 맨투맨",
    "00347-AFH": "드라이 기모 후드",
    "00348-AFZ": "드라이 기모 후드 집업",
    "00350-AIT": "라이트 드라이 라운드 티셔츠",
    "00777-SCT": "스탠다드 캔버스 토트백",
    "00778-TCC": "캔버스 토트백",
    "00780-TWT": "투톤 토트백"
  }
  return idtoNameMap[id]
}

export const lessInventoriesToString = (inventoris: Array<Inventory>) =>{
  const productIds = getProductSet(inventoris, "id")

  const convertedString = productIds.reduce((pre, id) => {
    const idFiltered = inventoris.filter(inventory => inventory.product.id === id)
    const productColors = getProductSet(idFiltered, "color")

    const convertedString = productColors.reduce((pre, color) => {
      const colorFiltered = idFiltered.filter(inventory => inventory.product.color === color)
      
      const convertedString = colorFiltered.reduce((pre, cur) => {
        return pre + ` ${cur.product.size}`
      },"")
      return pre + `${color} : ${convertedString}\n`
    },"")
    return pre + `${formatIdToName(id)}(${id})\n${convertedString}`+"\n"
  },"")
  return convertedString
}