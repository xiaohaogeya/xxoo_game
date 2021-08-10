// 获取所有单元格列表
let cells= document.querySelectorAll('.cell')
// 玩家
let currentPlayer = 'x'

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
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x'
}