---
title: Installation
description: How to start crafting documentation with LibDoc.
layout: libdoc/page

#LibDoc specific below
category: Features
order: 90
---
* 
{:toc}

## Online - Remote theme

*Available only on GitHub*, [remote theme feature](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll#adding-a-theme) is the most simple way to use LibDoc, it does not require any installation, just follow these few steps:

1. **Create a repository** <br>Just add a new repository on your GitHub account. [Example](https://github.com/olivier3lanc/LibDoc-remote-demo/)
2. **Create a LibDoc config file** <br>Create and configure your LibDoc config file called [_config.yml](libdoc-config.html), required for GitHub Pages, do not forget to add/uncomment the following line:<br>`remote_theme: olivier3lanc/Jekyll-LibDoc`<br>[View a _config.yml example](https://github.com/olivier3lanc/LibDoc-remote-demo/blob/main/_config.yml)
3. **Enable Github Pages** <br>To automatically compile your LibDoc project, just enable GitHub Pages at `https://github.com/[GH_USER_NAME]/[REPO_NAME]/settings/pages`. Each time you commit and push on the specified branch, [Github Pages](https://pages.github.com) builds and hosts your project on the URL `https://[GH_USER_NAME].github.io/[REPO_NAME]`.

Your repository is now ready to be deployed as GitHub Pages website, all you have to do is adding your content! Learn more about [remote themes](https://github.blog/2017-11-29-use-any-theme-with-github-pages/)


## Online - Copy or clone

![Github.dev](assets/libdoc/img/libdoc-edit-online.webp)

It is possible to craft documentation with LibDoc only with your browser, [Github](https://www.github.com) and [Github Pages](https://pages.github.com). 

1. Copy, clone or fork [LibDoc repository](https://github.com/olivier3lanc/Jekyll-LibDoc)
2. On the forked/copy repository, press `Shift + .` or go to `https://github.dev/[GH_USER_NAME]/[REPO_NAME]/tree/[BRANCH_NAME]`
3. You are now into [Visual Studio Code](https://code.visualstudio.com/) and you can edit, commit and push.

To automatically compile your LibDoc project, just enable your instance on this page `https://github.com/[GH_USER_NAME]/[REPO_NAME]/settings/pages`. Each time you commit and push on the specified branch, [Github Pages](https://pages.github.com) builds and hosts your project on the URL `https://[GH_USER_NAME].github.io/[REPO_NAME]`.

## Locally

LibDoc requires only [Jekyll](https://jekyllrb.com/) to compile your work.

1. Install Jekyll on your machine following the steps described [here](https://jekyllrb.com/docs/)
2. Get the latest version of LibDoc 
    * [Download blank](https://github.com/olivier3lanc/Jekyll-LibDoc/archive/refs/heads/master.zip) or [Download with demo content](https://github.com/olivier3lanc/Jekyll-LibDoc/archive/refs/heads/develop.zip)
    * You can also clone repository from your terminal `git clone git@github.com:olivier3lanc/Jekyll-LibDoc.git`
3. Into the folder where LibDoc was copied, adjust your settings of your YAML file, Most important are
    * `url` <br>The host of your local set up, this can be for example *http://localhost* or *http://192.168.1.2* or domaine name
    * `baseurl` <br>The path to your local copy of LibDoc. For example */Jekyll-LibDoc/_site*
    * `title` <br>Title of the documentation
    * `description` <br>Description of your documentation project
4. Compile your project using:
    * `jekyll build`<br> Builds the project using *_config.yml*
    * `jekyll build -c _personal-config.yml` <br> Builds the project using *_personal-config.yml*
    * `jekyll build -c _personal-config.yml --watch` <br> Builds the project using *_personal-config.yml* and automatically compiles on detected changes.
    * Learn more about command line usage on [official Jekyll documentation](https://jekyllrb.com/docs/usage/)

## Local with remote theme

[View example repository](https://github.com/olivier3lanc/LibDoc-remote-demo/tree/local)

It is possible to only write your content without complete LibDoc installation, just use LibDoc as remote theme. You only need to use locally [Jekyll remote theme plugin](https://github.com/benbalter/jekyll-remote-theme)

1. Install Jekyll on your machine following the steps described [here](https://jekyllrb.com/docs/)
2. Add a Gemfile with the following line
    ```ruby
    gem "jekyll-remote-theme"
    ```
    and run `bundle install` to install the plugin
3. Add the following to your LibDoc's local config file *_config-local.yml*

    ```yml
    remote_theme: olivier3lanc/Jekyll-LibDoc
    plugins:
        - jekyll-remote-theme
    ```
4. Run `jekyll build` or with any custom config file `jekyll build -c _your-own-config.yml`

Feel free to use the [example repository](https://github.com/olivier3lanc/LibDoc-remote-demo/tree/local) as starter template.











