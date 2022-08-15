#!/bin/sh

# user_email=$1
user_email="snguoila@yahoo.com"
# repo_name=$2
# api_token=$3
# user_name=$4

git config user.email "$user_email"
# Show user email setup
git config user.email
# git commit -m "initial commit"
git push -u origin master
