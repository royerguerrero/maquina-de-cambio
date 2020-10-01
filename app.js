const button = document.getElementById('calc')
const changeSpan  = document.getElementById('change')
const coins = [100, 50, 25, 5, 1]

const calcChange = (item, cost) => {
    let change = parseInt(cost.value) - parseInt(item.value)
    changeSpan.innerHTML = change > 0 ? change : `${0} <br> El dinero dado por el cliente es insufuciente`
    numberOfCoins = []
    for (let i = 0; i < coins.length; i++) {
        coinsCounter = 0
        while (true) {
            res = change - coins[i]
            if (res < 0) {
                break
            } else {
                change -= coins[i]
                coinsCounter++
            }
        }
        numberOfCoins.push(coinsCounter)
    }

    return numberOfCoins
}

button.addEventListener("click", () => {
    const item = document.getElementById('item')
    const cost = document.getElementById('cost')
    numberOfCoins = calcChange(item, cost)
    for (let i = 0; i < coins.length; i++) {
        document.getElementById(coins[i]).innerHTML = numberOfCoins[i] 
    }
})