# [workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces)
> 工作区，是本地文件系统的嵌套包，精简了本地包的工作流程，子工作区可以共享主工作区的所有依赖。  

## 定义工作区
1. 通过 `package.json` 中的 `workspaces` 属性定义
   ```json
   {
     "name": "my-workspaces-project",
     "workspaces": [
       "packages/a"
     ]
   }
   ```
2. 使用 `npm init` 定义
   ```sh
   npm init -w ./packages/a
   ```

## 指定工作区添加依赖
```sh
npm install <package> -w <workspace>
```

## 运行指定工作区指令
```sh
npm run <command> --workspace=<workspace> [--workspace=<workspace> ...]
```

> `npm run <command> --workspaces` 将会根据 `package.json` 中定义的 `workspaces` 依次执行所有工作区的指令

> `npm run <command> --workspaces --if-present` 会忽略不存在该指令的工作区