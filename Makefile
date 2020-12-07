
# HOST_URL is defined via an enviroment variable and can be changed here.
DEPLOY_HOST = pwt5ca@${HOST_URL}
DEPLOY_DEST = ~/rpi.patrickwthomas.net/
NPM = npm
RSYNC = rsync
RSYNCFLAG = -azvr

build:
	${NPM} install
	${NPM} run css-build
	cp -r "node_modules/font-awesome/fonts" "src"

deploy: build
	${RSYNC} ${RSYNCFLAG} src/ ${DEPLOY_HOST}:${DEPLOY_DEST}

clean:
	rm -rf "src/fonts" "src/css" "node_modules"
