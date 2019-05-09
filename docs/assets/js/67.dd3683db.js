(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{364:function(a,s,t){"use strict";t.r(s);var e=t(3),r=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"构建docker镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建docker镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 构建Docker镜像")]),a._v(" "),t("h1",{attrs:{id:"卸载旧版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载旧版本","aria-hidden":"true"}},[a._v("#")]),a._v(" 卸载旧版本")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum remove docker \\\n          docker-client \\\n          docker-client-latest \\\n          docker-common \\\n          docker-latest \\\n          docker-latest-logrotate \\\n          docker-logrotate \\\n          docker-selinux \\\n          docker-engine-selinux \\\n          docker-engine\n")])])]),t("h1",{attrs:{id:"开始安装docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始安装docker","aria-hidden":"true"}},[a._v("#")]),a._v(" 开始安装docker")]),a._v(" "),t("h2",{attrs:{id:"安装所需的包。yum-utils提供了yum-config-manager效用，并device-mapper-persistent-data和lvm2由需要devicemapper存储驱动程序。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装所需的包。yum-utils提供了yum-config-manager效用，并device-mapper-persistent-data和lvm2由需要devicemapper存储驱动程序。","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装所需的包。yum-utils提供了yum-config-manager效用，并device-mapper-persistent-data和lvm2由需要devicemapper存储驱动程序。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y yum-utils \\\n  device-mapper-persistent-data \\\n  lvm2\n")])])]),t("h2",{attrs:{id:"使用以下命令设置稳定的存储库。即使您想从边缘或测试存储库安装构建，也总是需要稳定的存储库。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用以下命令设置稳定的存储库。即使您想从边缘或测试存储库安装构建，也总是需要稳定的存储库。","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用以下命令设置稳定的存储库。即使您想从边缘或测试存储库安装构建，也总是需要稳定的存储库。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum-config-manager --enable docker-ce-edge\n")])])]),t("h2",{attrs:{id:"禁用测试库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#禁用测试库","aria-hidden":"true"}},[a._v("#")]),a._v(" 禁用测试库")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum-config-manager --disable docker-ce-edge\n")])])]),t("h2",{attrs:{id:"安装最新版本的docker-ce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装最新版本的docker-ce","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装最新版本的Docker CE")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker-ce\n")])])]),t("h2",{attrs:{id:"列出可用版本-从最高到最低排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列出可用版本-从最高到最低排序","aria-hidden":"true"}},[a._v("#")]),a._v(" 列出可用版本,从最高到最低排序")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v(" yum list docker-ce --showduplicates "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sort")]),a._v(" -r\n")])])]),t("h2",{attrs:{id:"安装一个库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装一个库","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装一个库")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker-ce-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("VERSION STRING"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#例如")]),a._v("\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker-ce-18.03.1.ce\n")])])]),t("h2",{attrs:{id:"启动docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动docker","aria-hidden":"true"}},[a._v("#")]),a._v(" 启动Docker")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("systemctl start docker\n")])])]),t("h2",{attrs:{id:"查看本地镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看本地镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看本地镜像")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker images\n")])])]),t("h2",{attrs:{id:"搜索镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搜索镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 搜索镜像")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("##搜索centos有关的镜像")]),a._v("\ndocker search centos\n")])])]),t("h2",{attrs:{id:"下载镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 下载镜像")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#centos镜像")]),a._v("\ndocker pull centos\n")])])]),t("h2",{attrs:{id:"通过运行hello-world-映像验证安装是否正确。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过运行hello-world-映像验证安装是否正确。","aria-hidden":"true"}},[a._v("#")]),a._v(" 通过运行hello-world 映像验证安装是否正确。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker run hello-world\n")])])]),t("h2",{attrs:{id:"启动一个基于docker-io-centos的容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动一个基于docker-io-centos的容器","aria-hidden":"true"}},[a._v("#")]),a._v(" 启动一个基于docker.io/centos的容器")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker run -it --name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("test-centos docker.io/centos:latest /bin/bash\n")])])]),t("div",{staticClass:"language-diff extra-class"},[t("pre",{pre:!0,attrs:{class:"language-diff"}},[t("code",[t("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+ -it 表示交互模式, 启动成功后进入命令行")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+ -d 表示守护模式, 容器在后台运行")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+ --name 为容器命名")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+ docker.io/centos:latest 格式为镜像名:版本")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+ /bin/bash 进入bash命令行")]),a._v("\n")])])]),t("h2",{attrs:{id:"其他docker命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他docker命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 其他docker命令")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#退出docker容器")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#如果容器内部没有任何程序运行, 一旦执行exit, 退出容器时, 容器将结束运行")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("exit")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#查看运行中的容器")]),a._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#查看全部的容器, 包括运行中和已停止运行的容器")]),a._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" -a\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#通过容器名称删除已经停止运行的容器(test-centos为docker run命令中给容器的命名)")]),a._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" test-centos\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#通过容器ID删除已经停止运行的容器,与上面的命令效果一样, 060e是containerID的前4位")]),a._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" 060e\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#强制删除状态为Up, 正在运行中的容器")]),a._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -f test-centos\n")])])]),t("hr"),a._v(" "),t("h1",{attrs:{id:"构建镜像文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建镜像文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 构建镜像文件")]),a._v(" "),t("h2",{attrs:{id:"准备centos基础镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备centos基础镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 准备centos基础镜像")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker pull centos\n")])])]),t("h2",{attrs:{id:"准备jdk7和tomcat8-5安装包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备jdk7和tomcat8-5安装包","aria-hidden":"true"}},[a._v("#")]),a._v(" 准备JDK7和tomcat8.5安装包")]),a._v(" "),t("p",[a._v("JDK7下载地址：\nhttp://www.oracle.com/technetwork/java/javase/downloads/java-archive-downloads-javase7-521261.html")]),a._v(" "),t("p",[a._v("tomcat8.5下载地址：\nhttps://tomcat.apache.org/download-80.cgi")]),a._v(" "),t("h2",{attrs:{id:"在home文件夹下创建docker目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在home文件夹下创建docker目录","aria-hidden":"true"}},[a._v("#")]),a._v(" 在home文件夹下创建docker目录")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p /home/docker\n")])])]),t("h2",{attrs:{id:"把jdk和tomcat都解压到-home-docker文件夹下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#把jdk和tomcat都解压到-home-docker文件夹下","aria-hidden":"true"}},[a._v("#")]),a._v(" 把JDK和Tomcat都解压到/home/docker文件夹下")]),a._v(" "),t("h3",{attrs:{id:"建议重命名为最简单的名称"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建议重命名为最简单的名称","aria-hidden":"true"}},[a._v("#")]),a._v(" 建议重命名为最简单的名称")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#解压")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf jdk-7u80-linux-i586.tar.gz -C /home/docker\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf apache-tomcat-8.5.32.tar.gz -C /home/docker\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#重命名")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" /home/docker/apache-tomcat-8.5.32.tar.gz /home/docker/tomcat-8080\n")])])]),t("h2",{attrs:{id:"删掉jdk文件夹下多余文件-降低build的镜像大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删掉jdk文件夹下多余文件-降低build的镜像大小","aria-hidden":"true"}},[a._v("#")]),a._v(" 删掉jdk文件夹下多余文件, 降低build的镜像大小")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf /data/docker/jdk1.7.0_80/*src.zip \\\n    /data/docker/jdk1.7.0_80/lib/missioncontrol \\\n    /data/docker/jdk1.7.0_80/lib/visualvm \\\n    /data/docker/jdk1.7.0_80/lib/*javafx* \\\n    /data/docker/jdk1.7.0_80/jre/lib/plugin.jar \\\n    /data/docker/jdk1.7.0_80/jre/lib/ext/jfxrt.jar \\\n    /data/docker/jdk1.7.0_80/jre/bin/javaws \\\n    /data/docker/jdk1.7.0_80/jre/lib/javaws.jar \\\n    /data/docker/jdk1.7.0_80/jre/lib/desktop \\\n    /data/docker/jdk1.7.0_80/jre/plugin \\\n    /data/docker/jdk1.7.0_80/jre/lib/deploy* \\\n    /data/docker/jdk1.7.0_80/jre/lib/*javafx* \\\n    /data/docker/jdk1.7.0_80/jre/lib/*jfx* \\\n    /data/docker/jdk1.7.0_80/jre/lib/amd64/libdecora_sse.so \\\n    /data/docker/jdk1.7.0_80/jre/lib/amd64/libprism_*.so \\\n    /data/docker/jdk1.7.0_80/jre/lib/amd64/libfxplugins.so \\\n    /data/docker/jdk1.7.0_80/jre/lib/amd64/libglass.so \\\n    /data/docker/jdk1.7.0_80/jre/lib/amd64/libgstreamer-lite.so \\\n    /data/docker/jdk1.7.0_80/jre/lib/amd64/libjavafx*.so \\\n    /data/docker/jdk1.7.0_80/jre/lib/amd64/libjfx*.so\n")])])]),t("h2",{attrs:{id:"进入-home-docker文件夹并创建dockerfile文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进入-home-docker文件夹并创建dockerfile文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 进入/home/docker文件夹并创建Dockerfile文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" /home/docker "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" Dockerfile\n")])])]),t("h2",{attrs:{id:"插入以下内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插入以下内容","aria-hidden":"true"}},[a._v("#")]),a._v(" 插入以下内容")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#使用的基础镜像")]),a._v("\nFROM centos\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#作者信息")]),a._v("\nMAINTAINER ichangg "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"claer@ichangg.com"')]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#创建目录")]),a._v("\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p /data/java/jdk1.7.0_80\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#把当前目录下的jdk文件夹添加到镜像")]),a._v("\nADD jdk1.7.0_80 /data/java/jdk1.7.0_80\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#创建tomcat目录")]),a._v("\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p /data/java/tomcat-8080\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#把当前目录下的tomcat文件夹添加到镜像")]),a._v("\nADD tomcat-8080 /data/java/tomcat-8080\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#添加环境变量")]),a._v("\nENV JAVA_HOME /data/java/jdk1.7.0_80\nENV CATALINA_HOME /data/java/tomcat-8080\nENV PATH "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/bin:"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CATALINA_HOME")]),a._v("/bin\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#暴露端口")]),a._v("\nEXPOSE 8080\nEXPOSE 8090\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#启动时运行tomcat")]),a._v("\nCMD "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/data/java/tomcat-8080/bin/catalina.sh"')]),a._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"run"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h2",{attrs:{id:"开始构建docker镜像文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始构建docker镜像文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 开始构建docker镜像文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker build -t repos_local/centos-jdk7-tomcat85:0.0.1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(".")]),a._v("\n")])])]),t("div",{staticClass:"language-diff extra-class"},[t("pre",{pre:!0,attrs:{class:"language-diff"}},[t("code",[t("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+ -t 设置tag名称, 命名规则registry/image:tag")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+ . 表示使用当前目录下的Dockerfile文件")]),a._v("\n")])])]),t("h2",{attrs:{id:"查看镜像是否创建成功"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看镜像是否创建成功","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看镜像是否创建成功")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker images\n")])])]),t("h2",{attrs:{id:"启动centos-jdk7-tomcat85容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动centos-jdk7-tomcat85容器","aria-hidden":"true"}},[a._v("#")]),a._v(" 启动centos-jdk7-tomcat85容器")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker run -d -p 8081:8080 --name tomcat-8080 repos_local/centos-jdk7-tomcat85:0.0.1\n")])])]),t("div",{staticClass:"language-diff extra-class"},[t("pre",{pre:!0,attrs:{class:"language-diff"}},[t("code",[t("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+ -d 后台运行")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+ -p 宿主机port:容器port 端口映射,外部访问的是宿主机端口")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+ --name 容器名称, 可以通过容器名称对容器操作")]),a._v("\n")])])]),t("h2",{attrs:{id:"centos7下可以直接使用firewall-cmd来开放端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos7下可以直接使用firewall-cmd来开放端口","aria-hidden":"true"}},[a._v("#")]),a._v(" centos7下可以直接使用firewall-cmd来开放端口")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#开放8081端口  permanent为永久开放")]),a._v("\nfirewall-cmd --zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("8081/tcp --permanent\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#重新读取配置")]),a._v("\nfirewall-cmd --reload\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#查看全部开放端口")]),a._v("\nfirewall-cmd --list-all\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#如果提示FirewallD is not running执行systemctl start firewalld.service, 启动firewalld服务")]),a._v("\n")])])]),t("h2",{attrs:{id:"查看docker运行状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看docker运行状态","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看docker运行状态")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v("\n")])])]),t("h2",{attrs:{id:"运行tomcat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行tomcat","aria-hidden":"true"}},[a._v("#")]),a._v(" 运行Tomcat")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker start tomcat-8080\n")])])]),t("h2",{attrs:{id:"停止tomcat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止tomcat","aria-hidden":"true"}},[a._v("#")]),a._v(" 停止Tomcat")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker stop tomcat-8080\n")])])]),t("h2",{attrs:{id:"强制删除一个运行中的容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强制删除一个运行中的容器","aria-hidden":"true"}},[a._v("#")]),a._v(" 强制删除一个运行中的容器")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -f tomcat-8080\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#docker rm 命令删除一个Exited状态的容器, docker rm -f 强制删除一个运行中的容器")]),a._v("\n")])])]),t("h2",{attrs:{id:"停止所有的container，这样才能够删除其中的images："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止所有的container，这样才能够删除其中的images：","aria-hidden":"true"}},[a._v("#")]),a._v(" 停止所有的container，这样才能够删除其中的images：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker stop "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" -a -q"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#如果想要删除所有container的话再加一个指令：")]),a._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" -a -q"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),t("h2",{attrs:{id:"删除images，通过image的id来指定删除谁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除images，通过image的id来指定删除谁","aria-hidden":"true"}},[a._v("#")]),a._v(" 删除images，通过image的id来指定删除谁")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker rmi "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("image id"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#想要删除untagged images，也就是那些id为<None>的image的话可以用")]),a._v("\ndocker rmi "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("docker images "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"^<none>"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"{print '),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$3")]),a._v('}"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#要删除全部image的话")]),a._v("\ndocker rmi "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("docker images -q"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),t("hr"),a._v(" "),t("p",[a._v("docker run -it")]),a._v(" "),t("p",[a._v("docker run -i -t -v /home:/home/docker 89796a /bin/bash")]),a._v(" "),t("p",[a._v('docker run -d -p 8080:8080 -v /home/tomcat/webapps/:/home/tomcat-8080/webapps/ --name ichangg ichangg/centos-jt:1.0 /home/run.sh\n-v 略，如前所述说\n-d 表示以"守护模式"执行/root/run.sh脚本，此时 Tomcat 控制台不会出现在输出终端上\n-p 表示宿主机与容器的端口映射，此时将容器内部的8080端口映射为宿主机的58080端口，这样就向外界暴露了58080端口，可通过Docker网桥来访问容器内部的8080端口了\n--name 表示容器名称，用一个你觉得有意义的名称命名即可\ntest_tomcat:1.0 即新容器名:TAG\n/root/run.sh 即需要执行的脚本')]),a._v(" "),t("p",[a._v("#!/bin/bash")]),a._v(" "),t("p",[a._v("export JAVA_HOME=/home/java/jdk1.7.0_80\nexport PATH=$JAVA_HOME/bin:$PATH")]),a._v(" "),t("p",[a._v("sh /home/tomcat-8080/bin/catalina.sh run")]),a._v(" "),t("p",[a._v("chmod a+x run.sh")]),a._v(" "),t("p",[a._v("rm -rf /home/jdk1.7.0_80/"),t("em",[a._v("src.zip "),t("br"),a._v("\n/home/jdk1.7.0_80/lib/missioncontrol "),t("br"),a._v("\n/home/jdk1.7.0_80/lib/visualvm "),t("br"),a._v("\n/home/jdk1.7.0_80/lib/"),t("em",[a._v("javafx")]),a._v(" "),t("br"),a._v("\n/home/jdk1.7.0_80/jre/lib/plugin.jar "),t("br"),a._v("\n/home/jdk1.7.0_80/jre/lib/ext/jfxrt.jar "),t("br"),a._v("\n/home/jdk1.7.0_80/jre/bin/javaws "),t("br"),a._v("\n/home/jdk1.7.0_80/jre/lib/javaws.jar "),t("br"),a._v("\n/home/jdk1.7.0_80/jre/lib/desktop "),t("br"),a._v("\n/home/jdk1.7.0_80/jre/plugin "),t("br"),a._v("\n/home/jdk1.7.0_80/jre/lib/deploy")]),a._v(" "),t("br"),a._v("\n/home/jdk1.7.0_80/jre/lib/"),t("em",[a._v("javafx")]),a._v(" "),t("br"),a._v("\n/home/jdk1.7.0_80/jre/lib/"),t("em",[a._v("jfx")]),a._v(" "),t("br"),a._v("\n/home/jdk1.7.0_80/jre/lib/amd64/libdecora_sse.so "),t("br"),a._v("\n/home/jdk1.7.0_80/jre/lib/amd64/libprism_"),t("em",[a._v(".so "),t("br"),a._v("\n/home/jdk1.7.0_80/jre/lib/amd64/libfxplugins.so "),t("br"),a._v("\n/home/jdk1.7.0_80/jre/lib/amd64/libglass.so "),t("br"),a._v("\n/home/jdk1.7.0_80/jre/lib/amd64/libgstreamer-lite.so "),t("br"),a._v("\n/home/jdk1.7.0_80/jre/lib/amd64/libjavafx")]),a._v(".so "),t("br"),a._v("\n/home/jdk1.7.0_80/jre/lib/amd64/libjfx*.so")]),a._v(" "),t("p",[a._v('docker commit -m="Added jdk_tomcat" -a="ichangg" 44652ba46352 ichangg/centos-jt:1.0\n-m:提交的描述信息')]),a._v(" "),t("p",[a._v("-a:指定镜像作者")]),a._v(" "),t("p",[a._v("44652ba46352：容器ID")]),a._v(" "),t("p",[a._v("ichangg/centos-jt:1.0:指定要创建的目标镜像名,1.0版本")]),a._v(" "),t("h1",{attrs:{id:"返回顶部"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#返回顶部","aria-hidden":"true"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"#readme"}},[a._v("返回顶部")])])])},[],!1,null,null,null);s.default=r.exports}}]);