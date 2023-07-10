# [禁用特定的自动配置类](https://docs.spring.io/spring-boot/docs/3.1.1/reference/htmlsingle/#using.auto-configuration.disabling-specific)

如果发现不希望应用的特定自动配置类，可以使用 `@SpringBootApplication` 的 `exclude` 属性禁用它们，如下例所示：
```java
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
public class MyApplication {

}
```

如果类不在类路径上，则可以使用注解的 `excludeName` 属性并指定完全限定的名称。如果您更喜欢使用 `@EnableAutoConfiguration` 而不是 `@SpringBootApplication`，也可以使用 `exclude` 和 `excludeName`。最后，您还可以使用 `spring.autoconfig.exclude` 属性来控制要排除的自动配置类的列表。

> 你可以在注解级别排除，也可以使用属性定义排除

> 尽管自动配置类是公共的，但该类唯一被视为公共 `API` 的方面是可用于禁用自动配置的类的名称。这些类的实际内容，如嵌套的配置类或bean方法，仅供内部使用，我们不建议直接使用这些内容。