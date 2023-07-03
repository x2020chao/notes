[定位主应用程序类](https://docs.spring.io/spring-boot/docs/3.1.1/reference/htmlsingle/#using.structuring-your-code.locating-the-main-class)

我们通常建议您将主应用程序类定位在其他类之上的根包中。`SpringBootApplication` 注解通常放在主类上，它隐式地为某些项定义了一个基本地搜索包。例如，如果你正在编写 `jpa` 程序，`@SpringBootApplication` 注释类所在的包将用于搜索 `@Entity` 项。使用根包还允许组件扫描仅应用于您的项目。

> 如果您不想使用 `@SpringBootApplication`，它导入的 `@EnableAutoConfiguration` 和 `@ComponentScan` 注解定义了该行为，你也可以使用它们。