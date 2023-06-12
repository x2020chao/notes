# 仪表盘
```bash
## 启用仪表板插件，并在默认的 Web 浏览器中打开代理
$ minikube dashboard
```

## 访问虚拟机中的仪表盘
- [参考](https://kubernetes.io/zh-cn/docs/tasks/access-application-cluster/web-ui-dashboard/)
```
$ kubectl proxy --address='0.0.0.0' --accept-hosts='^.*'
```
> 访问 `<虚拟机IP>:8001/api/v1/namespaces/kubernetes-dashboard/services/http:kubernetes-dashboard:/proxy/`