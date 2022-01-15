# codi-lernapp

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Notes
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /codi-lernapp
RewriteRule ^codi-lernapp/index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /codi-lernapp/index.html [L]
</IfModule>