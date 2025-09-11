.PHONY: dev build export deploy clean

dev:
	npm run dev

build:
	npm run build

export: build
	npm run export
	mkdir -p docs
	cp -r out/* docs/

deploy: export
	cd .. && git add tutorial-website/docs/ && git commit -m "Deploy tutorial website" && git push

clean:
	rm -rf .next out docs node_modules