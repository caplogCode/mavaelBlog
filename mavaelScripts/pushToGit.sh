#!/bin/bash

#Color Codes for CLI Messages

COLOR='\033[0;35m'
COLOR_WARN='\033[0;31m'
COLOR_INFO='\033[0;33m'
COLOR_NULL='\033[0;38m'
bold=$(tput bold)
underline=$(tput smul)
green=$(tput setaf 2)

if [ ${1} -z "" ];
then 
echo -e "${COLOR_WARN}${bold}A valid commit message is needed to push your changes! ${COLOR_INFO}${bold}[./functions/scripts/pushToGit.sh ${COLOR_WARN}${underline}${bold}any message]${COLOR_NULL}"

else
 
echo

echo -e "${COLOR_INFO}${bold}Display Changes:"
echo -e "${COLOR}${bold}===============================================================================================================${green}"
git status

echo 

echo -e "Do you want to push these changes?"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) 
echo -e "${COLOR_INFO}${bold}Adding Changes"
echo -e "${COLOR}${bold}===============================================================================================================${green}"
git add .

echo
echo -e "${COLOR_INFO}${bold}Changes added successfully!"
echo -e "${COLOR}${bold}===============================================================================================================${green}"

echo

echo -e "${COLOR_INFO}${bold}Added Changes:"
echo -e "${COLOR}${bold}===============================================================================================================${green}"
git status

echo

echo -e "${COLOR_INFO}${bold}Commiting Changes:"
echo -e "${COLOR}${bold}===============================================================================================================${green}"
git commit -m"${1}"

echo

echo -e "${COLOR_INFO}${bold}Pushing Changes:"
echo -e "${COLOR}${bold}===============================================================================================================${green}"
git push

echo

echo -e "${COLOR_INFO}${bold}SUCCESSFULLY PUSHED -> ${COLOR_WARN}${bold}${1}${COLOR_NULL}"
echo -e "${COLOR}${bold}===============================================================================================================${COLOR_NULL}"; break;;
        No ) exit;;
    esac
done

fi