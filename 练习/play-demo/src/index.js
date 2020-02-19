import { showPlayAd } from '@game/game-ad';
import {subYears, subWeeks} from 'date-fns'
import {trim, getDomain} from 'mazey'

showPlayAd({
    adid: "4133220215", // 广告 id
    downId: '7342900', // cpc下载用广告id 用于调起下载器
    options: {
        callback: () => {
            console.log('ok')
        },
        channel: 'gmc.play.demo'
    }, // 需含有callback和channel
    url: 'https://cdn.suyujoy.com/qtt/adh5/xiaoxiaole/demo/index.html' // 'https://newidea4-gamecenter-frontend.1sapp.com/game/ad/qa1/test.html#' //
  });

  // done: 关闭时关闭页面

  // test

  console.info(trim('  222'), getDomain({url: 'https://cdn.suyujoy.com/qtt/adh5/xiaoxiaole/demo/index.html'}))
//   console.info(subYears())
// m.addClass()
// m.getDomain()
trim()
getDomain()