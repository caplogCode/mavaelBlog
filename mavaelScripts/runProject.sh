#!/bin/bash

#Color Codes for CLI Messages

COLOR='\033[0;35m'
COLOR_WARN='\033[0;31m'
COLOR_INFO='\033[0;33m'
COLOR_NULL='\033[0;38m'
bold=$(tput bold)
underline=$(tput smul)
green=$(tput setaf 2)
mVar=$(echo -e "${COLOR_WARN}${bold}M${COLOR}${bold}A${COLOR_INFO}${bold}V${COLOR_WARN}${bold}A${COLOR_NULL}${bold}E${COLOR}${bold}L${COLOR_NULL}") 
mavael=$(echo -e "Wie soll $mVar gebaut werden?:")
PS3="$mavael "
options=("Angular (ng serve)" "Ionic (ionic serve)" "Nativ ausführen" "Cancel")
select opt in "${options[@]}"
do
    case $opt in
        "Angular (ng serve)")
            ng serve
            echo -e "$mVar läuft nun in http:localhost:4200/"
            break
            ;;
        "Ionic (ionic serve)")
            ionic serve
            echo -e "$mVar läuft nun in http:localhost:8100/"
            break
            ;;
      "Nativ ausführen")
           sudo ionic cordova run browser
            echo -e "$mVar läuft nun nativ in http:localhost:8100/"
            break
            ;;
        "Cancel")
            break
            ;;
        *) echo -e "${COLOR_INFO}${bold}Ungültige Eingabe: ${COLOR_WARN}${bold}$REPLY${COLOR_NULL}";;
    esac
done