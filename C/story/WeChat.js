// 定时发送
function ohayo (date, msg, fn0) {
    const D = new Date()
    const [YYYY, MM, DD] = [D.getFullYear(), D.getMonth() + 1, D.getDate()]
    let Fantastic = `${YYYY}-${MM}-${DD} ${date}`
    if (new Date(Fantastic) - Date.now() < 0) {
        Fantastic = `${YYYY}-${MM}-${DD + 1} ${date}`
    }
    console.log(Fantastic)
    setTimeout(
        () => {
            if (fn0) {
                fn0()
            }
            if (msg === 'weatherDes') {
                msg = weatherDes
            }
            angular.element('pre:last').scope().editAreaCtn = msg
            document.querySelector('.btn_send').click()
        },
        new Date(Fantastic) - Date.now()
    )
}
// 重复次数 / 以天为单位
function hebdomad (fn, repeatCount = 1) {
    fn()
    repeatCount--
    while (repeatCount) {
        console.log(repeatCount)
        setTimeout(() => {
            fn()
        }, 1000 * 3600 * 24 * repeatCount)
        repeatCount--
    }
}
// 天气
let weatherDes = '不知道怎么回事，今天还没有获取天气！'
// TODO: /life/suggestion.json
// 获取天气
function getWeather (obj) {
    const {text, temperature} = obj.results[0].now
    let msg = ''
    if (parseInt(temperature, 10) <= 13) {
        msg = '可能有点冷，注意保暖哦！'
    }
    if (text.includes('雨')) {
        msg += '\n别忘了带伞！'
    }
    weatherDes = `实时天气：${text}，温度${temperature}°C！${msg}`
    console.log(weatherDes)
}
// 失败反馈
function getError (obj) {
    weatherDes = `不知道怎么回事，获取天气失败了！\n原因：${obj.status}`
    console.log(weatherDes)
}
// Jsonp 获取天气
function getWeatherByMazey () {
    const script = document.createElement('script')
    script.setAttribute('src', 'https://mazey.cn/server/weather')
    document.head.appendChild(script)
}
// getWeatherByMazey()
// 多个消息整合
function pinnacle () {
    ohayo('7:00:00', '早上好，今天也是吃不到全家桶的一天呢！', getWeatherByMazey)
    ohayo('7:05:00', 'weatherDes')
    ohayo('10:40:00', '年轻人总以为自己有的选择，结果还不是点外卖。')
    ohayo('11:43:00', '准备吃午饭了！\n午饭！\n饭！')
    ohayo('17:50:00', '各部门注意，马上就要下班了！', getWeatherByMazey)
    ohayo('17:55:00', 'weatherDes')
    ohayo('18:00:00', '下班！\n下班！！\n下班！！！')
}
hebdomad(pinnacle, 2)
// function kb () {
//     ohayo('07:10:00', '早安！\n要乖乖吃药，吃早饭！')
//     ohayo('07:30:00', '✔️安全的电量\n✔️公交卡\n✔️暖暖的衣服')
// }
//
// hebdomad(kb, 5)
// function yy () {
//     ohayo('7:00:00', '早安！', getWeatherByMazey)
//     ohayo('7:05:00', '提前看了下今天下雨，不知道上面自动获取+拼接的准不准，总之记得带伞！')
//     ohayo('7:00:30', 'weatherDes')
// }
// hebdomad(yy)
