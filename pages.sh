#! /bin/sh
git branch -D gh-pages
git reset
git clean -xdfe /docs/

mv docs/* .
rm -rf docs
git commit -m "Pages"
git push -f origin gh-pages