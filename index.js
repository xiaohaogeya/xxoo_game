// 创建枚举
var Player;
(function (Player) {
    Player["X"] = "x";
    Player["O"] = "o";
})(Player || (Player = {}));
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
    // 切换玩家
    currentPlayer = currentPlayer === Player.X ? Player.O : Player.X;
    // 切换玩家提示
    gameBord.classList.remove(Player.O, Player.X);
    gameBord.classList.add(currentPlayer);
}
