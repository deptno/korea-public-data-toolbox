import xml2js from 'xml2js'
import {JsonResponse} from '../types'

export const xmlToJson: <T>(xml: string) => Promise<JsonResponse<T>> = xml => {
  return new Promise(resolve => {
    xml2js.parseString(xml, (err, data) => {
      const {header, body} = data.response

      return resolve({
        header: {
          code: header[0].resultCode[0],
          msg: header[0].resultMsg[0],
        },
        body: {
          items     : body[0].items[0].item,
          totalCount: parseInt(body[0].totalCount),
          pageNo    : parseInt(body[0].pageNo),
          numOfRows : parseInt(body[0].numOfRows)
        }
      })
    })
  })
}



