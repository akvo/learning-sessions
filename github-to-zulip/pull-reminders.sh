#!/bin/bash

set -euo pipefail

github_pull() {
    curl -H "Accept: application/vnd.github.v3+json"  "https://api.github.com/repos/akvo/$1/pulls?state=open" > "/tmp/github-pulls-$1.json"
}

list_open_pull_requests() {
    open_prs="$(jq -r .[].html_url /tmp/github-pulls-$1.json)"
    echo "$open_prs"
}

post_to_zulip(){
    curl -X POST https://akvo.zulipchat.com/api/v1/messages \
         -u "${ZULIP_TOKEN}" \
         -d 'type=stream' \
         -d 'to=flumen-dev' \
         -d 'topic=Pull reminder' \
         -d "content=$1"
}

github_pull akvo-lumen
post_to_zulip "$(list_open_pull_requests akvo-lumen)"
