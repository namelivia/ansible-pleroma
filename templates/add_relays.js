#!/bin/bash
eval "$(sentry-cli bash-hook)"
cat {{ hostvars[inventory_hostname].working_directory }}{{ application_name }}/relay_list | while read line 
do
  docker exec -it {{ application_name }} ./bin/pleroma_ctl relay follow $line
done
