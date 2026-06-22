import{_ as n,c as a,o as p,aj as e}from"./chunks/framework.Cjb08o0w.js";const h=JSON.parse('{"title":"docker","description":"","frontmatter":{"title":"docker"},"headers":[],"relativePath":"computer-science/CI-CD/docker.md","filePath":"computer-science/CI-CD/docker.md"}'),l={name:"computer-science/CI-CD/docker.md"};function i(c,s,t,r,o,d){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="docker" tabindex="-1">docker <a class="header-anchor" href="#docker" aria-label="Permalink to “docker”">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to “安装”">​</a></h2><h3 id="centos-centos-7" tabindex="-1">centos(CentOS 7) <a class="header-anchor" href="#centos-centos-7" aria-label="Permalink to “centos(CentOS 7)”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 使用阿里云的 CentOS Vault Repo</span></span>
<span class="line"><span>curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装依赖</span></span>
<span class="line"><span>sudo yum install -y yum-utils</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 阿里云 源</span></span>
<span class="line"><span>sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装 Docker</span></span>
<span class="line"><span>sudo yum install -y docker-ce docker-ce-cli containerd.io</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看版本</span></span>
<span class="line"><span>docker --version</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启动 Docker</span></span>
<span class="line"><span>sudo systemctl enable docker</span></span>
<span class="line"><span>sudo systemctl start docker</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看状态</span></span>
<span class="line"><span>systemctl status docker</span></span></code></pre></div><h3 id="镜像加速" tabindex="-1">镜像加速 <a class="header-anchor" href="#镜像加速" aria-label="Permalink to “镜像加速”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 配置 Docker 镜像加速（推荐，先试）</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 先查看当前有没有配置镜像</span></span>
<span class="line"><span>cat /etc/docker/daemon.json</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 如果没有，就创建</span></span>
<span class="line"><span>mkdir -p /etc/docker</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cat &gt; /etc/docker/daemon.json &lt;&lt;EOF</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;registry-mirrors&quot;: [</span></span>
<span class="line"><span>    &quot;https://docker.m.daocloud.io&quot;</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 重启 Docker</span></span>
<span class="line"><span>systemctl daemon-reload</span></span>
<span class="line"><span>systemctl restart docker</span></span></code></pre></div><h2 id="常用操作命令" tabindex="-1">常用操作命令 <a class="header-anchor" href="#常用操作命令" aria-label="Permalink to “常用操作命令”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># centos 操作系统环境下</span></span>
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
<span class="line"><span>docker ps -a</span></span></code></pre></div><h2 id="如何开启-debug-模式" tabindex="-1">如何开启 debug 模式 <a class="header-anchor" href="#如何开启-debug-模式" aria-label="Permalink to “如何开启 debug 模式”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 编辑文件</span></span>
<span class="line"><span>sudo vim /etc/systemd/system/docker.service.d/debug.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 添加或修改以下内容</span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>ExecStart=</span></span>
<span class="line"><span>ExecStart=/usr/bin/dockerd --debug</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 重新加载 systemd 配置并重启 Docker</span></span>
<span class="line"><span>sudo systemctl daemon-reload</span></span>
<span class="line"><span>sudo systemctl restart docker</span></span></code></pre></div>`,10)])])}const u=n(l,[["render",i]]);export{h as __pageData,u as default};
