# [`Auto-configuration`](https://docs.spring.io/spring-boot/docs/3.1.1/reference/htmlsingle/#using.auto-configuration)
`Spring Boot` 自动配置尝试根据您添加的 `jar` 依赖项自动配置您的 `Spring` 应用程序。例如，如果 `HSQLDB` 在 `classpath` 上，并且没有手动配置任何数据库连接 `bean`，那么 `Spring Boot` 会自动配置内存中的数据库

你需要将 `@EnableAutoConfiguration` 或者 `@SpringBootApplication` 注解添加到你的一个 `@Configuration` 类来选择自动配置

您应该只添加一个 `@SpringBootApplication` 或 `@EnableAutoConfiguration` 注解。我们通常建议您仅将一个或另一个添加到 `@Configuration` 主类中。