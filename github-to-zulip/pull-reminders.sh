#!/bin/bash

set -euo pipefail

#github_pull() {
#    curl -H "Accept: application/vnd.github.v3+json"  "https://api.github.com/repos/akvo/akvo-lumen/pulls?state=open" > /tmp/github-pulls.json
#}

list_open_pull_requests() {
    open_prs="$(jq -r .[].html_url github-pulls.json)"
    echo $open_prs
}

post_to_zulip(){
    curl -X POST https://akvo.zulipchat.com/api/v1/messages \
         -u "${ZULIP_TOKEN}" \
         -d 'type=stream' \
         -d 'to=flumen-dev' \
         -d 'topic=Pull reminder' \
         -d "content=$1"
}

post_to_zulip "$(list_open_pull_requests)"
