#!/bin/bash

#Color Codes for CLI Messages

COLOR='\033[0;35m'
COLOR_WARN='\033[0;31m'
COLOR_INFO='\033[0;33m'
COLOR_NULL='\033[0;38m'
bold=$(tput bold)
underline=$(tput smul)
green=$(tput setaf 2)

echo

echo -e "${COLOR_WARN}${bold}Generating /www folder"
echo -e "${COLOR}${bold}==============================================================================================================="
sudo ionic build

echo

echo -e "${COLOR_WARN}${bold}Start Hosting"
echo -e "${COLOR}${bold}==============================================================================================================="
sudo firebase deploy --only hosting