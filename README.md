# SF toolbox folder-spy


folder-spy is a SF tool build on _**gulp**_. The purpose is to save __ant deploy-js__ time for all SF UIers.
folder-spy will watch your JS file changes and deploy them automaticlly to your jboss server.
> Known Issue:
  For gulp-watch issue it can not catch new file event on some OS plantform, So if you add a new file under spyed folder you should restart folder-spy.

### Install
Make sure you have already installed nodejs.

Install gulp (_**skip this step if you alreay installed gulp**_)
``` shell
$ npm install -g gulp
```

``` shell
$ git clone https://github.com/hxshandle/folder-spy.git
$ cd folder-spy
$ npm install
```

### Before start working
In order to make foler-spy work fine you should let it know you Dev env info. You should reset the following two variables in **gulpfile.js** to fit your own ENV.
``` javascript
var srcDir = "/mnt/handle/workspace/sfsf/trunk/au-v4/au-V4-web/src/main/webapp/ui/gm/**/*.js";
var destDir = "/mnt/ramdisk/jboss_4.3/server/main/deploy/main-sfv4.ear/sfv4.war/ui/gm";
```

### Use It
``` shell
$ cd `where you foler-spy`
$ gulp
```

Enjoy it and leave "_**ant deploy-js**_".