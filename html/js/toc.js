document.addEventListener('DOMContentLoaded', function () {
    const tocButton = document.getElementById('toc-button');
    const tocContainer = document.getElementById('toc-container');
    const tocContent = document.getElementById('toc-content');
    const headings = document.querySelectorAll('h1, h2, h3');

    // 生成目录内容
    if (headings.length) {
        let tocHTML = '<h3>页面目录</h3><ul>';
        let lastLevel = 1;

        headings.forEach((heading, index) => {
            if (!heading.id) {
                heading.id = 'section-' + index;
            }

            const level = parseInt(heading.tagName.substring(1));
            const indent = (level - 1) * 15;

            tocHTML += `
                        <li style="margin-left: ${indent}px">
                            <a href="#${heading.id}">${heading.textContent}</a>
                        </li>
                    `;
        });

        tocHTML += '</ul>';
        tocContent.innerHTML = tocHTML;
    }

    // 切换目录显示/隐藏
    tocButton.addEventListener('click', function () {
        tocContainer.classList.toggle('show');

        // 点击目录外区域关闭目录
        if (tocContainer.classList.contains('show')) {
            setTimeout(() => {
                document.addEventListener('click', closeTocOnClickOutside);
            }, 10);
        } else {
            document.removeEventListener('click', closeTocOnClickOutside);
        }
    });

    // 点击目录链接后关闭目录
    // tocContent.addEventListener('click', function (e) {
    //     if (e.target.tagName === 'A') {
    //         setTimeout(() => {
    //             tocContainer.classList.remove('show');
    //             document.removeEventListener('click', closeTocOnClickOutside);
    //         }, 300); // 等待平滑滚动完成
    //     }
    // });

    // 点击目录外区域关闭目录
    // function closeTocOnClickOutside(e) {
    //     if (!tocContainer.contains(e.target) && e.target !== tocButton) {
    //         tocContainer.classList.remove('show');
    //         document.removeEventListener('click', closeTocOnClickOutside);
    //     }
    // }

    // 平滑滚动
    tocContent.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
});
