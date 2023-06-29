# [@Controller](https://docs.spring.io/spring-framework/reference/web/webflux/controller/ann.html)
你可以使用标准的 `Spring bean` 定义来定义 `controller bean`。与 `Spring` 对在类路径中检测`@Component` 类并自动注册 `bean` 定义的一般支持相一致，`@Controller` 构造型允许自动检测。它还作为注释类的构造型，表示其作为Web组件的角色。

要启用此类 `@Controller bean` 的自动检测，你可以把 __组件扫描__ 加入到 `Java` 配置中，如下所示：
```java
@Configuration
@ComponentScan("org.example.web") 
public class WebConfig {
	// ...
}
```
> @ComponentScan("org.example.web")  将扫描 `org.example.web` 包

`@RestController` 是一个由 `Controller` 和 `@ResponseBody` 的元注解组成的组合注解，控制器的每个方法都继承了类型级的 `@ResponseBody` 注释，直接将结果写入相应正文，而不是使用 `HTML` 模板进行视图解析和渲染。

## AOP 代理
在某些情况下，你可能需要在运行时使用 `AOP 代理` 装饰一个 `controller`。你可以选择直接在 `controller` 上边使用 `@Transactional` 注解，在这种情况下，特别是控制器，我们建议使用基于类的代理，这在直接在 `controller` 上使用此类注解时自动发生。

如果控制器实现了一个接口，并且需要 `AOP 代理`，你可能需要显式配置基于类的代理。例如：你可以把 `@EnableTransactionManagement` 修改为 `@EnableTransactionManagement(proxyTargetClass = true`， 把 `<tx:annotation-driven/>` 修改为 `<tx:annotation-driven proxy-target-class="true"/>`

> 请注意，从 `6.0` 开始，使用接口代理时，`Spring WebFlux` 不再仅基于接口上的类型级别的 `@RequestMapping` 注解来检测控制器，请启用基于类的代理，否则接口也必须有 `@Controller` 注解。