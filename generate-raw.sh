#!/bin/sh

modid="bloodmagic"
# URL="https://github.com/WayOfTime/BloodMagic/archive/refs/heads/1.20.1.tar.gz"
#
# wget -O "archive.tar.gz" "${URL}"

if [[ -d 'temp' ]]
then
  rm -r 'temp'
fi
mkdir 'temp'

tar -xvf archive.tar.gz -C temp/ --strip-components=1


if [[ -d 'raws' ]]
then
  rm -r 'raws'
fi
mkdir 'raws'

cp -r "temp/src/main/resources/assets/${modid}/patchouli_books/guide/en_us" "raws/"

rm -r 'temp'