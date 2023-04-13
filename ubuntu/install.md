# `ubuntu`
- [官网](https://cn.ubuntu.com/)

## 系统配置要求
- `>2` cpus
- `>4` 内存
- `>25` 存储
- 网络连接

## multipass 安装
```ps
# 查看网络设备
PS > multipass networks
Name            Type      Description
WLAN            wifi      Intel(R) Wi-Fi 6 AX201 160MHz

# 查看可用镜像
PS > multipass find
Image                       Aliases           Version          Description
22.04                       jammy,lts         20230302         Ubuntu 22.04 LTS

# 创建实例
PS > multipass launch -c 2 -d 25G -m 4G --network WLAN -n mpvm 22.04

# 设置multipass默认系统
PS > multipass set client.primary-name=mpvm
```
