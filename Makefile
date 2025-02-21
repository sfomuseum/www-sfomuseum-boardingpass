SERVER_URI=http://localhost:8080

# As in: https://github.com/aaronland/go-http-fileserver

debug:
	fileserver \
		-root ./www \
		-server-uri $(SERVER_URI) \
		-mimetype js=text/javascript \
		-mimetype wasm=application/wasm \
		-enable-cors
