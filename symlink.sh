#!/bin/sh

DIR=`basename $PWD`
for theme in `ls`; do
  test "$theme" = "symlink.sh" && continue
  ln -sf $DIR/$theme ..
done

