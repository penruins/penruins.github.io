// document.addEventListener('DOMContentLoaded', function () {
//     var tooltip = document.querySelector('.tooltip');
//     var tooltiptext = document.getElementById('myTooltip');
//
//     tooltip.addEventListener('click', function () {
//         if (tooltiptext.style.visibility === 'hidden') {
//             tooltiptext.style.visibility = 'visible';
//         } else {
//             tooltiptext.style.visibility = 'hidden';
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     // 获取所有带有 .tooltip 类的元素
//     var tooltips = document.querySelectorAll('.tooltip');
//
//     // 为每个 tooltip 元素添加点击事件监听器
//     tooltips.forEach(function (tooltip) {
//         tooltip.addEventListener('click', function () {
//             // 获取当前 tooltip 下的 .tooltiptext 元素
//             var tooltiptext = this.querySelector('.tooltiptext');
//             // 切换 'show' 类来控制气泡的显示
//             tooltiptext.classList.toggle('show');
//         });
//     });
// });
function toggleContent(element) {
    // 获取data-content属性中的内容
    var content = element.getAttribute('data-content');
    // 检查元素是否已经包含了内容
    if (element.innerText === content) {
        // 如果元素内容与data-content相同，则清空元素内容
        element.innerText = 'translate';
    } else {
        // 否则，设置元素内容为data-content中的内容
        element.innerText = content;
    }
}
