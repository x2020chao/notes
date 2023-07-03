# settings

## [使用腾讯云镜像源加速maven](https://mirrors.cloud.tencent.com/help/maven.html)
```
<mirror>
    <id>nexus-tencentyun</id>
    <mirrorOf>*</mirrorOf>
    <name>Nexus tencentyun</name>
    <url>http://mirrors.cloud.tencent.com/nexus/repository/maven-public/</url>
</mirror> 
```