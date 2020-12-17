# Serve the webapp
import http.server
import os
import contextlib
import http.server

def serve(port, directory) -> None:
    class _Handler(http.server.SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=directory, **kwargs)
        
        def end_headers(self):
            # https://gist.github.com/dustingetz/5348582
            self.send_header(
                "Cache-Control",
                "no-cache, no-store, must-revalidate",
            )
            self.send_header("Pragma", "no-cache")
            self.send_header("Expires", "0")
            super().end_headers()

    with http.server.HTTPServer(("", port), _Handler) as httpd:
        httpd.serve_forever()
