#!/bin/sh

for tema in borboleta_azul cirandas-green coral coral_ave_azul coral_estrela_verde coral_lilas coral_magenta coral_ondas_terra ees modernista modernista_celeste; do
  cd $tema
  mkdir bootstrap 2> /dev/null
  cd bootstrap
  rm all.scss _variables.scss
  for file in _variables.scss all.scss; do
    ln -s ../../cirandas-responsive/bootstrap/$file .
  done
  cd ../..
done
