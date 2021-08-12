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

echo -e "${COLOR_WARN}${bold}Changing Permission of ${COLOR_INFO}setupEnvironment.sh ${COLOR_NULL}"
echo -e "${COLOR}${bold}===============================================================================================================${green}"
chmod 755 mavaelScripts/setupEnvironment.sh

echo

echo -e "${COLOR_WARN}${bold}Changing Permission of ${COLOR_INFO}pushToGit.sh ${COLOR_NULL}"
echo -e "${COLOR}${bold}===============================================================================================================${green}"
chmod 755 mavaelScripts/pushToGit.sh

echo

echo -e "${COLOR_WARN}${bold}Changing Permission of ${COLOR_INFO}buildAndroid.sh ${COLOR_NULL}"
echo -e "${COLOR}${bold}===============================================================================================================${COLOR_NULL}"
chmod 755 mavaelScripts/buildAndroid.sh

echo

echo -e "${COLOR_WARN}${bold}Changing Permission of ${COLOR_INFO}buildiOS.sh ${COLOR_NULL}"
echo -e "${COLOR}${bold}===============================================================================================================${COLOR_NULL}"
chmod 755 mavaelScripts/buildiOS.sh

echo

echo -e "${COLOR_WARN}${bold}Changing Permission of ${COLOR_INFO}runProject.sh ${COLOR_NULL}"
echo -e "${COLOR}${bold}===============================================================================================================${COLOR_NULL}"
chmod 755 mavaelScripts/runProject.sh

echo

echo -e "${COLOR_WARN}${bold}Changing Permission of ${COLOR_INFO}deployFirebaseHosting.sh ${COLOR_NULL}"
echo -e "${COLOR}${bold}===============================================================================================================${COLOR_NULL}"
chmod 755 mavaelScripts/deployFirebaseHosting.sh