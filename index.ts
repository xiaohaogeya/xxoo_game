// 创建枚举
enum Player {
    X = 'x',
    O = 'o'
}
// 判赢数组
const winsArr = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // 横
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // 竖
    [0, 4, 8], [2, 4, 6]  // 斜
]
// 获取所有单元格列表
let cells = document.querySelectorAll('.cell')
// 游戏面板
let gameBord = document.querySelector('#bord')
// 信息面板
let message = document.querySelector('#message') as HTMLDivElement
// 获胜者
let winner = document.querySelector('#winner') as HTMLParagraphElement
// 重新开始
let restart = document.querySelector('#restart') as HTMLButtonElement
// 玩家
let currentPlayer = Player.X
// 步数
let steps = 0

// 重新开始
restart.addEventListener('click', function () {
    // 隐藏信息面板
    message.style.display = 'none'

    // 初始化步数
    steps = 0

    // 重置默认玩家为x
    currentPlayer = Player.X

    // 重置下棋提示为x
    gameBord.classList.remove(Player.O, Player.X)
    gameBord.classList.add(currentPlayer)

    // 清空棋盘
    cells.forEach(function (item) {
        let cell = item as HTMLDivElement
        cell.classList.remove(Player.O, Player.X)

        // 移除单元格事件，重新绑定事件
        cell.removeEventListener('click', clickCell)
        cell.addEventListener('click', clickCell, { once: true })
    })
})

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

    steps ++

    // 判断是否获胜
    let isWin = checkWin(currentPlayer)
    if (isWin) {
        message.style.display = 'block'
        winner.innerText = currentPlayer + '  赢啦!!!'
        return
    }

    // 判断平局
    if (steps === 9){
        message.style.display = 'block'
        winner.innerText = '平局'
        return
    }

    // 切换玩家
    currentPlayer = currentPlayer === Player.X ? Player.O : Player.X

    // 切换玩家提示
    gameBord.classList.remove(Player.O, Player.X)
    gameBord.classList.add(currentPlayer)
}

// 判赢函数
function checkWin(player: Player): boolean {
    return winsArr.some(function (item) {
        if (
            hasClass(cells[item[0]], player) &&
            hasClass(cells[item[1]], player) &&
            hasClass(cells[item[2]], player) 
        ) return true

        return false
    })
}

// 判断DOM是否有player类名
function hasClass(el:Element, player: string): boolean {
    return el.classList.contains(player)
}