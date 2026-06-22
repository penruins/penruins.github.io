import{_ as n,c as a,o as p,aj as e}from"./chunks/framework.Cjb08o0w.js";const h=JSON.parse('{"title":"docker","description":"","frontmatter":{"title":"docker"},"headers":[],"relativePath":"computer-science/CI-CD/docker.md","filePath":"computer-science/CI-CD/docker.md"}'),l={name:"computer-science/CI-CD/docker.md"};function c(i,s,t,r,d,o){return p(),a("div",null,[...s[0]||(s[0]=[e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># centos 操作系统环境下</span></span>
<span class="line"><span># docker 启动</span></span>
<span class="line"><span>systemctl start docker</span></span>
<span class="line"><span></span></span>
<span class="line"><span># docker 重启</span></span>
<span class="line"><span>systemctl restart docker</span></span>
<span class="line"><span></span></span>
<span class="line"><span># docker 停止</span></span>
<span class="line"><span>systemctl stop docker</span></span>
<span class="line"><span></span></span>
<span class="line"><span># docker 运行状态</span></span>
<span class="line"><span>systemctl status docker</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 进入容器中</span></span>
<span class="line"><span>docker exec -it &lt;container-name&gt; /bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看本地镜像</span></span>
<span class="line"><span>docker images</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 当前有哪些容器在运行</span></span>
<span class="line"><span>docker ps</span></span>
<span class="line"><span></span></span>
<span class="line"><span># docker 中有哪些容器，包括在运行以及已停止的</span></span>
<span class="line"><span>docker ps -a</span></span></code></pre></div><h1 id="如何开启-debug-模式" tabindex="-1">如何开启 debug 模式 <a class="header-anchor" href="#如何开启-debug-模式" aria-label="Permalink to “如何开启 debug 模式”">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 编辑文件</span></span>
<span class="line"><span>sudo vim /etc/systemd/system/docker.service.d/debug.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 添加或修改以下内容</span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>ExecStart=</span></span>
<span class="line"><span>ExecStart=/usr/bin/dockerd --debug</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 重新加载 systemd 配置并重启 Docker</span></span>
<span class="line"><span>sudo systemctl daemon-reload</span></span>
<span class="line"><span>sudo systemctl restart docker</span></span></code></pre></div>`,3)])])}const g=n(l,[["render",c]]);export{h as __pageData,g as default};
