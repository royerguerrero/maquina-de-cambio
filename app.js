const button = document.getElementById('calc')
const changeSpan  = document.getElementById('change')
const coins = [100, 50, 25, 5, 1]

const calcChange = (item, cost) => {
    const change = parseInt(cost.value) - parseInt(item.value)
    changeSpan.innerHTML = change
    let c = []
    for (let i = 0; i < coins.length; i++) {
        let chageInCoin = change / coins[i]
        if (Number.isInteger(chageInCoin)) {
            
        }
    }
    console.log(c)
    // let counter = 0
    // for (let i = 0; i < c.length; i++) {
    //     console.log(c[i])
    // }
}

button.addEventListener("click", () => {
    const item = document.getElementById('item')
    const cost = document.getElementById('cost')
    calcChange(item, cost)
})