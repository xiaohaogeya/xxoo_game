// 创建枚举
var Player;
(function (Player) {
    Player["X"] = "x";
    Player["O"] = "o";
})(Player || (Player = {}));
// 判赢数组
var winsArr = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6] // 斜
];
// 获取所有单元格列表
var cells = document.querySelectorAll('.cell');
var gameBord = document.querySelector('#bord');
// 玩家
var currentPlayer = Player.X;
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
    // 判断是否获胜
    var isWin = checkWin(currentPlayer);
    if (isWin) {
        console.log('赢了');
    }
    // 切换玩家
    currentPlayer = currentPlayer === Player.X ? Player.O : Player.X;
    // 切换玩家提示
    gameBord.classList.remove(Player.O, Player.X);
    gameBord.classList.add(currentPlayer);
}
// 判赢函数
function checkWin(player) {
    var isWin = winsArr.some(function (item) {
        var cellIndex1 = item[0];
        var cellIndex2 = item[1];
        var cellIndex3 = item[2];
        var cell1 = cells[cellIndex1];
        var cell2 = cells[cellIndex2];
        var cell3 = cells[cellIndex3];
        if (cell1.classList.contains(player) &&
            cell2.classList.contains(player) &&
            cell3.classList.contains(player)) {
            return true;
        }
        return false;
    });
    return isWin;
}
