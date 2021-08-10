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

let gameBord = document.querySelector('#bord')
// 玩家
let currentPlayer = Player.X



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

    // 判断是否获胜
    let isWin = checkWin(currentPlayer)
    if (isWin) {
        console.log('赢了');
        
    }

    // 切换玩家
    currentPlayer = currentPlayer === Player.X ? Player.O : Player.X

    // 切换玩家提示
    gameBord.classList.remove(Player.O, Player.X)
    gameBord.classList.add(currentPlayer)
}

// 判赢函数
function checkWin(player: Player): boolean {
    let isWin = winsArr.some(function (item) {
        let cellIndex1 = item[0]
        let cellIndex2 = item[1]
        let cellIndex3 = item[2]

        let cell1 = cells[cellIndex1]
        let cell2 = cells[cellIndex2]
        let cell3 = cells[cellIndex3]

        if (
            cell1.classList.contains(player) &&
            cell2.classList.contains(player) &&
            cell3.classList.contains(player) 
        ) {
            return true
        } 
        return false
    })
    return isWin
}