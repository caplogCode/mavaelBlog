#!/bin/bash

#Color Codes for CLI Messages

COLOR='\033[0;35m'
COLOR_WARN='\033[0;31m'
COLOR_INFO='\033[0;33m'
COLOR_NULL='\033[0;38m'
bold=$(tput bold)
underline=$(tput smul)
green=$(tput setaf 2)

PS3='Was möchten sie tun: '
options=("GIT Push" "Umgebung einrichten (empfohlen bei Ersteinrichtung)" "Android APK Bauen" "iOS IPA Bauen" "Projekt lokal bauen" "Cancel")
select opt in "${options[@]}"
do
    case $opt in
        "GIT Push")
            echo -e "${COLOR_INFO}${bold}Bitte geben sie eine Änderungsnachricht ein: "
            read commit_message
            str="${commit_message// /_}"
            ./mavaelScripts/pushToGit.sh "$str"
            break
            ;;
        "Umgebung einrichten (empfohlen bei Ersteinrichtung)")
            echo -e "${COLOR_INFO}${bold}Berechtigungen werden gesetzt: "
            sudo .//mavaelScripts/setupScripts.sh
            echo -e "${COLOR_INFO}${bold}Umgebung wird eingericht"
            ./mavaelScripts/setupEnvironment.sh
            break
            ;;
        "Android APK Bauen")
            echo -e "${COLOR_INFO}${bold}Android APK wird generiert"
            ./mavaelScripts/buildAndroid.sh
            break
            ;;
         "iOS IPA Bauen")
            echo -e "${COLOR_INFO}${bold}iOS IPA wird generiert"
            ./mavaelScripts/buildiOS.sh
            break
            ;;
        "Projekt lokal bauen")
            ./mavaelScripts/runProject.sh
            break
            ;;
        "Cancel")
            break
            ;;
        *) echo -e "${COLOR_INFO}${bold}Ungültige Eingabe: ${COLOR_WARN}${bold}$REPLY${COLOR_NULL}";;
    esac
done