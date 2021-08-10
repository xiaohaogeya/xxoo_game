// 创建枚举
enum Player {
    X = 'x',
    O = 'o'
}

// 获取所有单元格列表
let cells = document.querySelectorAll('.cell')

let gameBord = document.querySelector('#bord')
// 玩家
let currentPlayer: Player = Player.X



// 每个单元格添加点击事件
cells.forEach(function (item) {
    let cell = item as HTMLDivElement
    cell.addEventListener('click', clickCell, { once: true })
})

// 棋牌中单元格的click事件处理程序
function clickCell(event: MouseEvent) {
    // 给当前点击事件的单元格添加类名x
    let target = event.target as HTMLDivElement
    target.classList.add(currentPlayer)
    // 切换玩家
    currentPlayer = currentPlayer === Player.X ? Player.O : Player.X

    // 切换玩家提示
    gameBord.classList.remove(Player.O, Player.X)
    gameBord.classList.add(currentPlayer)
}