#!/bin/sh

set -eux

ng lint
ng serve --serve-path / --host 0.0.0.0 --port 580 --disable-host-check true
