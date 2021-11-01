install:
	npm install

deploy:
	npx surge .

lint:
	npx stylelint ./styles/*.css
	npx htmlhint ./*.html