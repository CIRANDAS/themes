#!/bin/bash

THEMES_DIR=`basename $PWD`
LINK_DEST=`dirname $PWD`

#THEMES_SUBDIRS=`echo {colivre-themes/themes,}`
#IGNORE_SUBDIRS="\(colivre-themes\)"

if [[ -n $IGNORE_SUBDIRS ]]; then
  THEMES=`ls -d */ | grep -v $IGNORE_SUBDIRS`
else
  THEMES=`ls -d */`
fi
if [[ -n $THEMES_SUBDIRS ]]; then
  THEMES+=" `find $THEMES_SUBDIRS/* -maxdepth 0 -type d`"
fi

for theme in $THEMES; do
  echo "Linking $theme"

  ln -sf $THEMES_DIR/$theme -t $LINK_DEST
done

