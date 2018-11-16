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
            if (msg === 'weatherNow') {
                msg = weatherNow
            } else if (msg === 'weatherDaily') {
                msg = weatherDaily
            }
            angular.element('pre:last').scope().editAreaCtn = msg
            document.querySelector('.btn_send').click()
        },
        date === '00:00:00' ? 25 : new Date(Fantastic) - Date.now()
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
let weatherNow = '不知道怎么回事，今天还没有获取实时天气！'
let weatherDaily = '不知道怎么回事，今天还没有获取天气！'
// TODO: /life/suggestion.json
// 获取天气
function getWeatherNow (obj) {
    const {text, temperature} = obj.results[0].now
    let msg = ''
    if (parseInt(temperature, 10) <= 13) {
        msg = '可能有点冷，注意保暖哦！'
    }
    if (text.includes('雨')) {
        msg += '\n别忘了带伞！'
    }
    weatherNow = `实时天气：${text}，温度${temperature}°C！${msg}`
    console.log(weatherNow)
}
// 获取天气
function getWeatherDaily (obj) {
    const {text_day, text_night, high, low, wind_direction, wind_speed} = obj.results[0].daily[0]
    weatherDaily = `今日天气：白天${text_day}，夜晚${text_night}；\n温度：最低${low}°C，最高${high}°C；\n风向：${wind_direction}，风速：${wind_speed}km/h！`
}
// 失败反馈
function getError (obj) {
    weatherDaily = weatherNow = `不知道怎么回事，获取天气失败了！\n原因：${obj.status}`
}
// Jsonp 获取天气
function getWeatherByMazey () {
    const script = document.createElement('script')
    script.setAttribute('src', 'https://mazey.cn/server/weather/now')
    document.head.appendChild(script)
}
function getWeatherDailyByMazey () {
    const script = document.createElement('script')
    script.setAttribute('src', 'https://mazey.cn/server/weather/daily')
    document.head.appendChild(script)
}
// getWeatherByMazey()

/*消息*/
function goodMorning () {
    ohayo('07:01:00', '', getWeatherByMazey)
    ohayo('07:02:00', '', getWeatherDailyByMazey)
    ohayo('07:03:00', 'weatherDaily')
    ohayo('07:04:00', 'weatherNow')
}
// function pinnacle () {
//     ohayo('07:00:00', '早上好，今天也是吃不到全家桶的一天呢！')
//     goodMorning()
//     ohayo('10:40:00', '年轻人总以为自己有的选择，结果还不是点外卖。')
//     ohayo('11:43:00', '准备吃午饭了！\n午饭！\n饭！')
//     ohayo('17:50:00', '各部门注意，马上就要下班了！', getWeatherByMazey)
//     ohayo('17:55:00', 'weatherNow')
//     ohayo('18:00:00', '下班！\n下班！！\n下班！！！')
// }
function pinnacleWeekend () {
    ohayo('09:00:00', '早上好，周末就好好待家里吧！')
    ohayo('09:01:00', '点一份全家桶可以吃四顿，顿顿管饱，岂不是美滋滋！')
    ohayo('09:30:00', '执意要出门的话？', getWeatherByMazey)
    ohayo('09:31:00', '也可以看看天气。', getWeatherDailyByMazey)
    ohayo('09:32:00', 'weatherDaily')
    ohayo('09:33:00', 'weatherNow')
    ohayo('11:40:00', '认命吧，还不是点外卖。')
    ohayo('13:00:00', '', getWeatherByMazey)
    ohayo('13:01:00', 'weatherNow')
    ohayo('18:00:00', '你以为今天已经结束了，其实才刚刚开始。', getWeatherByMazey)
    ohayo('18:01:00', 'weatherNow')
    ohayo('22:30:00', '嗨起来！！！')
}
hebdomad(pinnacleWeekend, 2)
// function kb () {
//     ohayo('07:10:00', '早安！\n要乖乖吃药，吃早饭！')
//     ohayo('07:30:00', '✔️安全的电量\n✔️公交卡\n✔️暖暖的衣服')
// }
//
// hebdomad(kb, 5)
// function yy () {
//     ohayo('07:00:00', '早安！')
//     ohayo('07:01:00', '', getWeatherByMazey)
//     ohayo('07:02:00', '', getWeatherDailyByMazey)
//     ohayo('07:03:00', 'weatherDaily')
//     ohayo('07:04:00', 'weatherNow')
//     ohayo('07:05:00', '（比心）')
// }
// hebdomad(yy)
// function ting () {
//     ohayo('09:03:00', '早安！')
//     ohayo('22:57:00', '晚安！')
// }
// hebdomad(ting, 7)

/*测试*/
// ohayo('00:00:00', '', getWeatherDailyByMazey)
// setTimeout(() => {
//     ohayo('00:00:00', 'weatherDaily')
// }, 2000)