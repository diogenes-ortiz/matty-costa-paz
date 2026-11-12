#!/usr/bin/env bash
# Compila y publica dist/ en la rama gh-pages (GitHub Pages).
set -e
npx astro build
cd dist
touch .nojekyll
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy $(date +%Y-%m-%d\ %H:%M)"
git push -f https://github.com/diogenes-ortiz/matty-costa-paz.git gh-pages
rm -rf .git
