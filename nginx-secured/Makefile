build:
	docker build -t akvo/nginx-secured .

build-no-cache:
	docker build --no-cache -t akvo/nginx-secured .

run:
	echo "Visit: http://localhost:8082/admin/" && \
	docker run --rm --tty --interactive -p 8082:8082 akvo/nginx-secured | tee /tmp/nginx-`date +%s`.log
