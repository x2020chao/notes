# `minikube` 安装
- [官网](https://minikube.sigs.k8s.io/docs/start/)

## 环境要求
- `>2` 处理器单元
- `>2GB` 内存
- `>20GB` 空间
- internet connection
- 容器或虚拟机管理器

## multipass 安装
```ps
# 安装实例
PS > multipass launch -c 2 -d 40G -m 4G --network WLAN --timeout 600 -n mpvm-minikube 22.04

# 打开 shell
PS > multipass shell mpvm-minikube
```

## ubuntu
### [安装 minikube](https://minikube.sigs.k8s.io/docs/start/)
```bash
# 安装 minikube
$ curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
$ sudo install minikube-linux-amd64 /usr/local/bin/minikube
```

- [设置兼容的容器或虚拟机管理器](https://minikube.sigs.k8s.io/docs/drivers/)
  - [docker 安装](/docker/install.md)
  - 配置 docker 为默认驱动程序
    ```
    minikube config set driver docker
    ```
  - 添加用户组 
    ```
    sudo usermod -aG docker $USER && newgrp docker
    ```

### 启动集群
```bash
# 启动集群
$ minikube start
```