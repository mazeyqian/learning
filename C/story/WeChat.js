function Ohayo (date, msg) {
    const D = new Date()
    const [YYYY, MM, DD] = [D.getFullYear(), D.getMonth() + 1, D.getDate()]
    let Fantastic = `${YYYY}-${MM}-${DD} ${date}`
    if (new Date(Fantastic) - Date.now() < 0) {
        Fantastic = `${YYYY}-${MM}-${DD + 1} ${date}`
    }
    console.log(Fantastic)
    setTimeout(
        () => {
            angular.element('pre:last').scope().editAreaCtn = msg
            document.querySelector('.btn_send').click()
        },
        new Date(Fantastic) - Date.now()
    )
    return 1010
}

Ohayo('07:10:00', '早安！\n要乖乖吃药，吃早饭！')

Ohayo('07:30:00', '✔️安全的电量\n✔️公交卡\n✔️暖暖的衣服')

Ohayo('07:35:00', '天气预报说今天下午会有小雨，备好伞！')

Ohayo('08:00:00', '出门了吧，戴好口罩可别再受凉了！')

Ohayo('08:24:00', '打完卡准备工作啦，昨晚的日语歌还记得几句呢，想听！')

Ohayo('08:30:00', '今天上完就可以休息啦，程序是提前写的，すきだ是真心地 (￣(●●)￣)')

Ohayo('10:00:00', '电脑：如果你能收到这条消息说明那只猪还没起床~')

