#!/bin/sh

perl -pi -e 's/smoothness_mod/smoothness/g' **/theme.yml

for tema in `ls -d tantascores*`; do
  tema_destino=`ls $tema/stylesheets | grep -v style | grep -v variables | sed -e 's/_//g' | sed -e 's/\..*//g'`
  echo "convertendo $tema para $tema_destino responsivo..."
  cd $tema
  for file in content_top.html.erb footer.html.erb header.html.erb navigation.html.erb site_title.html.erb layouts; do
    rm $file
    ln -s ../$tema_destino/$file .
  done
  rm theme.js style.*
  echo "@import 'stylesheets/style';" > style.scss;
  cp -r ../cirandas-responsive/bootstrap .
  cat theme.yml | sed -e 's/cirandas$/cirandas-responsive/' | sed -e 's/default/awesome/' > theme2.yml
  echo "responsive: true" >> theme2.yml
  mv theme2.yml theme.yml
  cd stylesheets
  rm _$tema_destino* style.*
  ln -s ../../$tema_destino/stylesheets/style.scss .
  cd ../..
done
