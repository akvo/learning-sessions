#!/bin/bash

set -euo pipefail

rm -rf /tmp/akvo/pull-reminders
mkdir -p /tmp/akvo/pull-reminders

download_github_repos() {
    curl --silent \
        -H "Accept: application/vnd.github.v3+json" \
        https://api.github.com/orgs/akvo/repos > "/tmp/akvo/pull-reminders/repos.json"
}

list_repos() {
    repos="$(jq -r '.[].name' /tmp/akvo/pull-reminders/repos.json)"
    echo "$repos" > "/tmp/akvo/pull-reminders/repos.txt"
}

github_pull() {
    curl --silent \
         -H "Accept: application/vnd.github.v3+json" \
         "https://api.github.com/repos/akvo/$1/pulls?state=open" > "/tmp/akvo/pull-reminders/github-pulls-$1.json"
}

list_open_pull_requests() {
    open_prs="$(jq -r '.[] | [.title, (.requested_reviewers | map(.login) | join(", ")), .html_url]  | join(" ")' /tmp/akvo/pull-reminders/github-pulls-$1.json)"
    echo "$open_prs"
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

download_github_repos
list_repos


for var in $(cat /tmp/akvo/pull-reminders/repos.txt)
do
    github_pull "$var"
    list_open_pull_requests "$var"
done

# list_open_pull_requests "$var"
# list_repos

# post_to_zulip "$(list_open_pull_requests akvo-flow-mobile)"


# .[].requested_reviewers | map(.login) | join(", ")
# jq '.[0] | [.title, .html_url] + .requested_reviewers' /tmp/github-pulls-akvo-lumen.jso
