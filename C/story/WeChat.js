function ohayo (date, msg) {
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
}

function hebdomad (fn, repeatCount) {
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

function kb () {
    ohayo('07:10:00', '早安！\n要乖乖吃药，吃早饭！')
    ohayo('07:30:00', '✔️安全的电量\n✔️公交卡\n✔️暖暖的衣服')
}

hebdomad(kb, 5)
