#!/bin/bash

#Color Codes for CLI Messages

COLOR='\033[0;35m'
COLOR_WARN='\033[0;31m'
COLOR_INFO='\033[0;33m'
COLOR_NULL='\033[0;38m'
bold=$(tput bold)
underline=$(tput smul)
green=$(tput setaf 2)

echo -e "${COLOR_WARN}${bold}WARNING: ${COLOR_INFO}${bold}AndroidStudio have to be installed"

echo

echo -e "${COLOR_WARN}${bold}Deleting node_modules if installed"
echo -e "${COLOR}${bold}==============================================================================================================="
rm -rf node_modules

echo

echo -e "${COLOR_WARN}${bold}Pre-installing node_modules and detected libraries"
echo -e "${COLOR}${bold}==============================================================================================================="
npm install

echo

echo -e "${COLOR_WARN}${bold}Fixing warnings"
echo -e "${COLOR}${bold}==============================================================================================================="
npm audit fix

echo

echo -e "${COLOR_INFO}${bold}Installing Cordova"
echo -e "${COLOR}${bold}===============================================================================================================${green}"
sudo npm install -g cordova

echo

echo -e "${COLOR_WARN}${bold}Pre-installing node_modules and detected libraries"
echo -e "${COLOR}${bold}==============================================================================================================="
npm install

echo

echo -e "${COLOR_WARN}${bold}Installing Ionic CLI"
echo -e "${COLOR}${bold}==============================================================================================================="
sudo npm install -g @ionic/cli

echo

echo -e "${COLOR_WARN}${bold}Pre-installing node_modules and detected libraries"
echo -e "${COLOR}${bold}==============================================================================================================="
npm install

echo

echo -e "${COLOR_WARN}${bold}Fixing warnings"
echo -e "${COLOR}${bold}==============================================================================================================="
npm audit fix

echo

echo -e "${COLOR_INFO}${bold}\nNow, you should be good to go!\n"
echo -e "${COLOR}${bold}WELCOME TO ${COLOR_WARN}${bold}M${COLOR}${bold}A${COLOR_INFO}${bold}V${COLOR_WARN}${bold}A${COLOR_NULL}${bold}E${COLOR}${bold}L${COLOR_NULL}\n"

echo

echo -e "${COLOR_INFO}${bold}Setting env variable for corrrect JDK version"
echo -e "${COLOR}${bold}==============================================================================================================="
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.*/Contents/Home
export JAVA_HOME=$(/usr/libexec/java_home -v 1.8)
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

echo

echo -e "${COLOR_INFO}${bold}Start building android APK"
echo -e "${COLOR}${bold}==============================================================================================================="
sudo ionic cordova build android --prod --verbose
