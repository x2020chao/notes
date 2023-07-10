# [逐渐更换自动配置](https://docs.spring.io/spring-boot/docs/3.1.1/reference/htmlsingle/#using.auto-configuration.replacing)

自动配置是非侵入性的。在任何时候，您都可以开始定义自己的配置来替换自动配置的特定部分。例如，如果您添加了自己的 `DataSource` bean，那么默认的嵌入式数据库支持就会取消。

如果您需要了解当前正在应用的自动配置以及原因，请使用 `-debug` 开关启动您的应用程序。这样做可以为选定的核心记录器启用调试日志，并将条件报告记录到控制台。