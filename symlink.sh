#!/bin/bash

THEMES_DIR=`basename $PWD`
THEMES_SUBDIRS=`echo {colivre-themes/themes,}`
IGNORE_SUBDIRS="\(colivre-themes\)"

THEMES="`ls -d */ | grep -v $IGNORE_SUBDIRS` `find $THEMES_SUBDIRS/* -maxdepth 0 -type d`"

for theme in $THEMES; do
  echo "Linking $theme"

  ln -sf $THEMES_DIR/$theme ..
done

