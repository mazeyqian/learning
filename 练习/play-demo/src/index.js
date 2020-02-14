import { showPlayAd } from '@game/game-ad';

showPlayAd({
    adid: "7116287", // 广告 id
    downId: '7190529', // cpc下载用广告id 用于调起下载器
    options: {
        callback: () => {
            console.log('ok')
        },
        channel: 123
    }, // 需含有callback和channel
    url: 'https://cdn.suyujoy.com/qtt/adh5/xiaoxiaole/demo/index.html' // 'https://newidea4-gamecenter-frontend.1sapp.com/game/ad/qa1/test.html#' //
  });