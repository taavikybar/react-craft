#!/bin/bash
ROOT=node_modules/.bin

$ROOT/concurrently "yarn watch-md" "yarn watch-images" "yarn server-w" "yarn server" "yarn hot"