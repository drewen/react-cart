#! /bin/sh -x
git branch -D gh-pages
git reset
git clean -xdfe /docs/

mv docs/* .
rm -rf docs
git add .
git commit -am "Pages"
git push -f origin gh-pages