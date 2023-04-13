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
# 查看可用镜像
PS > multipass find
Image                       Aliases           Version          Description
minikube                                      latest           minikube is local Kubernetes

# 安装实例
PS > multipass launch -c 2 -d 40G -m 4G --network WLAN --timeout 600 -n mpvm-minikube minikube

# 打开 shell
PS > multipass shell mpvm-minikube
```

## ubuntu
```bash
# 安装 minikube
$ curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
$ sudo install minikube-linux-amd64 /usr/local/bin/minikube
```

- [设置兼容的容器或虚拟机管理器](https://minikube.sigs.k8s.io/docs/drivers/)
  - [docker 安装](/docker/install.md)


```bash
# 启动集群
$ minikube start --driver=docker
```