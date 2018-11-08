setTimeout(
    () => {
        angular.element('pre:last').scope().editAreaCtn = `✔️安全的电量\n✔️公交卡\n✔️伞`
        document.querySelector('.btn_send').click()
    },
    3000 // new Date('2018-11-08 21:04:00') - Date.now()
)