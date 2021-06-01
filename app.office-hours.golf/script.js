(async () => {
    const el = document.querySelector('#appName')
    const bt = document.querySelector('#copyOption')
    const re = document.querySelector('#reloadOption')

    const namesReq = await fetch('/data/app_names.txt')
    const names = await namesReq.text()
    const namesArr = names.split('\n')
    

    const reloadName = () => {
        const randomName = namesArr[Math.floor(Math.random() * namesArr.length)]
        el.innerHTML = '"  ' + randomName.trim() + '   "'
    }

    reloadName()
    

    bt.addEventListener('click',  () => {
        const range = document.createRange()
        range.selectNode(el)
        getSelection().removeAllRanges()
        getSelection().addRange(range)

        document.execCommand('copy')
        getSelection().removeAllRanges()
    })
    re.addEventListener('click', reloadName)
})();


