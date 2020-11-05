#!/bin/bash

set -euo pipefail

github_pull() {
# curl -H "Accept: application/vnd.github.v3+json"  "https://api.github.com/repos/akvo/akvo-lumen/pulls?state=open" > /tmp/github-pulls.json

}

list_open_pull_requests() {
open_prs="$(jq .[].html_url /tmp/github-pulls.json)"
}

post_to_zulip(){}
