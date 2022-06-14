#!/usr/bin/env bash

rm -fr build
npm run build
ssh mvp_bank@ihor-tarkhan.com "rm -fr ~/dc/build"
scp -r build mvp_bank@ihor-tarkhan.com:~/dc/build
