# [`@SpringBootApplication`](https://docs.spring.io/spring-boot/docs/3.1.1/reference/htmlsingle/#using.using-the-springbootapplication-annotation)

许多 `Spring Boot` 开发人员喜欢他们的应用程序使用自动配置、组件扫描，并且能够在他们的“应用程序类”上定义额外的配置。一个 `@SpringBootApplication` 注解可以用于启用这三个功能：
- `@EnableAutoConfiguration`
  > 启用 [`Spring Boot` 的自动配置机制](./auto-configuration/readme.md)  

- `@ComponentScan`
  > 在应用程序所在的包上启用 `@Component` 扫描，[最佳实践](./structuring-your-code/)  

- `@SpringBootConfiguration`
  > 允许在上下文中注册额外的bean或导入额外的配置类。`Spring` 中 `@Configuration` 的标准替代方案，有助于集成测试中的 [__配置检测__](../7.core-features/testing/testing-spring-boot-applications/detecting-test-configuration.md)。  



> `@SpringBootApplication` 还提供了别名自定义 `@EnableAutoConfiguration` 和 `@ComponentScan` 的属性。



## Note
这些功能都不是强制性的，您可以选择用它启用的任何功能来替换此单个注释。例如，你可能不想在应用程序中使用组件扫描或配置属性扫描：
```java
@SpringBootConfiguration(proxyBeanMethods = false)
@EnableAutoConfiguration
@Import({ SomeConfiguration.class, AnotherConfiguration.class })
public class MyApplication {
  public static void main(String[] args) {
    SpringApplication.run(MyApplication.class, args);
  }
}
```
在这个例子中，`MyApplication` 与任何其他 `Spring Boot` 应用程序一样，不同之处在于 `@Component` 注解类和 `@ConfigurationProperties` 注解类不会被自动检测到，并且用户定义的 `bean` 会显式导入（参见 `@Import`）