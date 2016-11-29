#!/bin/bash

curl https://raw.githubusercontent.com/fivethirtyeight/data/master/murder_2016/murder_2015_final.csv \
    | sed -e 's/2014_murders/murders_2014/g' \
    | sed -e 's/2015_murders/murders_2015/g'
