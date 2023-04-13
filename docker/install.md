# docker 安装

## ubuntu
- [清华源](https://mirrors.tuna.tsinghua.edu.cn/help/docker-ce/)

  ```bash
  # 安装依赖
  $ sudo apt-get install apt-transport-https ca-certificates curl gnupg2   software-properties-common
  
  # 信任 Docker 的 GPG 公钥并添加仓库：
  $ sudo mkdir -m 0755 -p /etc/apt/keyrings
  $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/  keyrings/docker.gpg
  $ echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://  mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/ubuntu \
    $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  
  # 安装
  $ sudo apt-get update
  $ sudo apt-get install docker-ce
  ```
