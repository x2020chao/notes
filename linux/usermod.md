# usermod 
> 修改一个用户账户

```
usermod [options] LOGIN
```

## options
- `-G, --groups GROUP1[, GROUP2, ...[, GROUPN]]`
  > 修改扩展用户组（覆盖原扩展组）
  - `-a, --append`
    > 仅在 `-G` 时可用，将用户添加到附属组