#! /bin/sh
git branch -D gh-pages
git reset
git clean -xdfe /docs/

mv docs/*
rm docs
git commit -m "Pages"
git push -f origin gh-pages