
# 确保脚本抛出遇到的错误
set -e
# 编译
# yarn
yarn build
# 同步
rsync -az --progress  --delete docs/.vuepress/dist/  \
    root@8.136.215.57:/data/www/HowToStartOpenSource.eryajf.net/
