1. Install

```
yarn add -D \
  eslint-config-prettier \
  prettier \
  stylelint \
  stylelint-8-point-grid \
  stylelint-rscss
```

2. Add configuration: `.stylelintrc`

```json
{
  "extends": ["stylelint-rscss/config", "stylelint-8-point-grid"],
  "rules": {
    "plugin/8-point-grid": {
      "base": 8,
      "allowlist": ["4px", "2px", "1px"]
    }
  }
}
```
