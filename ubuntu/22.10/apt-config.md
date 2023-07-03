# apt

## [清华源](https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/)
  ```bash
  # 备份系统配置文件
  sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
  # 编辑软件源配置
  sudo vim /etc/apt/sources.list
  ```

- `sources.list`:
```
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-backports main restricted universe multiverse

# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-security main restricted universe multiverse
# # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-security main restricted universe multiverse

deb http://security.ubuntu.com/ubuntu/ kinetic-security main restricted universe multiverse
# deb-src http://security.ubuntu.com/ubuntu/ kinetic-security main restricted universe multiverse

# 预发布软件源，不建议启用
# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-proposed main restricted universe multiverse
# # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ kinetic-proposed main restricted universe multiverse
```