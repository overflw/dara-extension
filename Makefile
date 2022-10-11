mod:
	cp -r automa automa-mod
	for file in $$(find modify/ -type f); do \
		cat $$file >> $$(sed 's,modify/,'automa-mod/',g' <<< "$$file") ; \
	done
	for file in $$(find replace/ -type f); do \
		cat $$file > $$(sed 's,replace/,'automa-mod/',g' <<< "$$file") ; \
	done

pull-automa:
	git subtree pull --prefix automa https://github.com/AutomaApp/automa.git main --squash

install:
	yarn --cwd automa-mod install

dev:
	yarn --cwd automa-mod dev

build:
	yarn --cwd automa-mod build

build-firefox:
	yarn --cwd automa-mod build:firefox

build-prod:
	yarn --cwd automa-mod build:prod

clean:
	rm -r automa-mod