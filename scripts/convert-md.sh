#!/bin/bash
for file in lib/md/*.md;
  do pandoc "$file" -o "${file//md/html}";
done