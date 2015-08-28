pj_admin
========

Structure
---------

```
pj-admin/
├── src/                   : Source files
│   ├── index.jade
│   ├── _data/             : JSON data for Jade
│   ├── _templates/        : Templates for Jade
│   ├── _stylus/
│   ├── js/
│   ├── img/
│   │   └── _sprites/      : Base images for spritesheet
│   └── bower_components/  : Libraries installed by Bower
├── dist/                  : Distibuted files
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── img/
├── grunt/                 : Grunt config scripts
│   ├── aliases.js         : Task registration script
│   └── xxxxx.js           : Separated Grunt task
├── test/                  : Test framework for application
│   └── spec/
│       └── xxxxx.js       : Spec scripts
├── package.json           : Development packages installed by npm
├── bower.json             : Front-end packages installed by bower
├── README.md              : Readme document for the project
├── Gruntfile.js           : Base Grunt config
├── .gitignore             : Git ignoring setting
├── .gitattributes         : Git attributes setting
├── .npmrc                 : npm config
├── .bowerrc               : Bower config
├── .editorconfig          : General editor config
├── .csslintrc             : CSS Lint config
└── .jshintrc              : JSHint config
```

### Naming Rules
* Directories begin with `_` aren't copied to "dist" directory. - e.g. `_sass`
* Files begin with `_` aren't compiled by themselves. They work as partials for import. - e.g. `_sprites.scss`

Getting Started
---------------

This project uses [Grunt](http://gruntjs.com/) as task runner, and [Bower](http://bower.io/) as component manager.  
You have to set them up on your PC, before start coding.

### 1. Install Node.js
[Download from Node.js official site](http://nodejs.org/), or use your package management software.
We recommend version 0.10.x.

### 2. Install Grunt
Execute the following command.
If you have installed old Grunt (ver. -0.3) already, run `npm uninstall -g grunt` to uninstall it at first.

```
npm install -g grunt-cli bower
```

### 3. Install Dependencies
Execute the install command in the root directory of "pj-admin" repository.

```
cd path/to/pj-admin
npm install && bower install
```

After that, you can use `grunt` and `bower` commands in the project root directory.

Build Tasks
-----------

### Supported Tasks

* `grunt`  
  Distribute files for deployment/delivery.
  This task includes lint, test and build.

* `grunt serve`  
  Start localhost server with BrowserSync.
  Type [Cntl + C] to exit.

* `grunt serve:dist`  
  Start localhost server using distributed files.
  This task doesn't contain build task. Run `grunt` at first as needed.

* `grunt lint`  
  Validate HTML, CSS and JavaScript files.

* `grunt test`  
  Run the unit tests.

For more details or customizing the tasks, please refer [grunt/aliases.js](browse/grunt/aliases.js).

Library Management
------------------

See the [Bower document](http://bower.io/#usage) for details.

### Installation

* `bower install --save <package>`  
  Install a package.

* `bower install --save <package>#<version>`  
  Install a specific version of package.

Installed library will be included in HTML automatically using [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep).
You don't need to update the reference manually.

### Search Packages
[Bower - Search](http://bower.io/search/)

----

This repository is created on 2015-03-13 using [generator-rff](http://rff.dev-jpe1.rakuten.rpaas.net/generator-rff/) v0.3.2.
