#!/bin/bash

set -euo pipefail

# rm -rf /tmp/akvo/github-pull-reminders
mkdir -p /tmp/akvo/github-pull-reminders

github_fetch() {
    curl --silent --show-error --fail -H "Accept: application/vnd.github.v3+json" "$1"
}

download_repos() {
    github_fetch https://api.github.com/orgs/akvo/repos > "/tmp/akvo/github-pull-reminders/repos.json"
}

create_repos_list() {
    repos="$(jq -r '.[].name' /tmp/akvo/github-pull-reminders/repos.json)"
    echo "$repos" > "/tmp/akvo/github-pull-reminders/repos.txt"
}

download_open_pulls_for_repo() {
    github_fetch "https://api.github.com/repos/akvo/$1/pulls?state=open" > "/tmp/akvo/github-pull-reminders/pulls-$1.json"
}

download_open_pulls_for_all_repos() {
    for repo in $(cat /tmp/akvo/github-pull-reminders/repos.txt)
    do
        download_open_pulls_for_repo "$repo"
        #list_open_pull_requests "$var"
    done
}

list_open_pulls_for_repo() {
    open_prs="$(jq -r '.[] | [.title, (.requested_reviewers | map(.login) | join(", ")), .html_url]  | join(" ")' /tmp/akvo/github-pull-reminders/pulls-$1.json)"
    if [ ! -z "$open_prs" ]
    then
       printf "\n\n### $1\n"
       printf "$open_prs"
    fi
}

list_open_pulls_for_all_repos() {
    for repo  in $(cat /tmp/akvo/github-pull-reminders/repos.txt)
    do
        list_open_pulls_for_repo "$repo"
    done
}

post_to_zulip(){
    curl -X POST https://akvo.zulipchat.com/api/v1/messages \
         -u "${ZULIP_TOKEN}" \
         -d 'type=stream' \
         -d 'to=bot-test' \
         -d 'include_custom_profile_fields=true' \
         -d 'topic=Pull reminder' \
         -d "content=$1"
}

download_repos
create_repos_list
download_open_pulls_for_all_repos

post_to_zulip "$(list_open_pulls_for_all_repos)"
