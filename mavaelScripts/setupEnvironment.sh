#!/bin/bash

#Color Codes for CLI Messages
COLOR='\033[0;35m'
COLOR_WARN='\033[0;31m'
COLOR_INFO='\033[0;33m'
COLOR_NULL='\033[0;38m'
bold=$(tput bold)

echo -e "${COLOR_WARN}${bold}WARNING: ${COLOR_INFO}${bold} node must be installed to run this application!"

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

echo -e "${COLOR_INFO}${bold}\nNow, you should be good to go!\n"
echo -e "${COLOR}${bold}WELCOME TO ${COLOR_WARN}${bold}M${COLOR}${bold}A${COLOR_INFO}${bold}V${COLOR_WARN}${bold}A${COLOR_NULL}${bold}E${COLOR}${bold}L${COLOR_NULL}\n"

echo

echo -e "Do you want to run ${COLOR_WARN}${bold}M${COLOR}${bold}A${COLOR_INFO}${bold}V${COLOR_WARN}${bold}A${COLOR_NULL}${bold}E${COLOR}${bold}L${COLOR_NULL} ?"
select yn in "Yes" "No"; do
      case $yn in
      Yes)
            echo -e "${COLOR_WARN}${bold}Open Project in Browser"
            echo -e "${COLOR}${bold}==============================================================================================================="

            if [[ "$OSTYPE" == "linux-gnu"* ]]; then
                  ionic serve
                  python -m webbrowser localhost:8100/
            elif [[ "$OSTYPE" == "darwin"* ]]; then
                  ionic serve
                  python -m webbrowser localhost:8100/
            elif [[ "$OSTYPE" == "cygwin" ]]; then
                  ionic serve
                  python -m webbrowser localhost:8100/
            elif [[ "$OSTYPE" == "msys" ]]; then
                  echo -e "${COLOR_WARN}${bold}Installing Angular CLI"
                  echo -e "${COLOR}${bold}==============================================================================================================="
                  npm install -g @angular/cli

                  echo

                  echo -e "${COLOR_WARN}${bold}Installing Angular CLI"
                  echo -e "${COLOR}${bold}===============================================================================================================${COLOR_NULL}"
                  ng update
                  ng serve
                  start "" http://localhost:4200/
            elif [[ "$OSTYPE" == "win32" ]]; then
                  echo -e "${COLOR_WARN}${bold}Installing Angular CLI"
                  echo -e "${COLOR}${bold}===============================================================================================================${COLOR_NULL}"
                  npm install -g @angular/cli

                  echo

                  echo -e "${COLOR_WARN}${bold}Installing Angular CLI"
                  echo -e "${COLOR}${bold}==============================================================================================================="
                  ng update
                  ng serve
                  start "" http://localhost:4200
            elif [[ "$OSTYPE" == "freebsd"* ]]; then
                  echo -e "${COLOR_WARN}${bold}Installing Angular CLI"
                  echo -e "${COLOR}${bold}==============================================================================================================="
                  npm install -g @angular/cli

                  echo

                  echo -e "${COLOR_WARN}${bold}Installing Angular CLI"
                  echo -e "${COLOR}${bold}==============================================================================================================="
                  ng update
                  ng serve
                  start "" http://localhost:4200
            else
                  echo -e "${COLOR_WARN}${bold}Installing Angular CLI"
                  echo -e "${COLOR}${bold}==============================================================================================================="
                  npm install -g @angular/cli

                  echo

                  echo -e "${COLOR_WARN}${bold}Installing Angular CLI"
                  echo -e "${COLOR}${bold}===============================================================================================================${COLOR_NULL}"
                  ng update
                  ng serve
                  start "" http://localhost:4200/
            fi
            echo
            echo break
            ;;
      No) exit ;;
      esac
done
