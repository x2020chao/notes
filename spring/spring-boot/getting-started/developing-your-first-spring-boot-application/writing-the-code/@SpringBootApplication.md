# [`@SpringBootApplication` 注解](https://docs.spring.io/spring-boot/docs/3.1.1/reference/htmlsingle/#getting-started.first-application.code.spring-boot-application)
> `class-level` 注解，是一个元注解，它组合了 `@SpringBootConfiguration`, `@EnableAutoConfiguration` 和 `@ComponentScan`  

`@EnableAutoConfiguration` 告诉 `Spring Boot` 根据添加的 `jar` 依赖项猜测如何配置 `Spring`。由于 `spring-boot-starter-web` 依赖项添加了 `Tomcat` 和 `SpringMVC`，自动配置就假设正在开发一个 `web` 应用程序，并相应地设置 `Spring`。

## `starter` 和 自动配置
自动配置是为了与 `starter` 配置使用而设计的，但是两个概念没有直接联系在一起，你可以在 `starter` 外部自由地选择 `jar` 依赖，`Spring Boot` 会尽可能地自动配置应用程序