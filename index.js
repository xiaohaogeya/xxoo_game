// 获取所有单元格列表
var cells = document.querySelectorAll('.cell');
// 玩家
var currentPlayer = 'x';
// 每个单元格添加点击事件
cells.forEach(function (item) {
    var cell = item;
    cell.addEventListener('click', clickCell, { once: true });
});
// 棋牌中单元格的click事件处理程序
function clickCell(event) {
    // 给当前点击事件的单元格添加类名x
    var target = event.target;
    target.classList.add(currentPlayer);
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
}
