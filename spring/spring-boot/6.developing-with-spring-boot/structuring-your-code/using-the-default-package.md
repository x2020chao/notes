# [使用默认程序包](https://docs.spring.io/spring-boot/docs/3.1.1/reference/htmlsingle/#using.structuring-your-code.using-the-default-package)

当一个类不包括 `package` 声明时，它被认为是在“默认包”中。通常不鼓励使用“默认包”，应避免使用。它可能会给使用 `@ComponentScan`、`@ConfigurationPropertiesScan`、`@EntityScan` 或 `@SpringBootApplication` 注解的 `Spring Boot` 应用程序带来特殊问题，因为每个 `jar` 中的每个类都被读取。

> 我们建议您遵循 `Java` 推荐的包命名约定，并使用反向域名，如 `com.example.project`