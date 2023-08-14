# Wrangler Unicode Bug on Windows

This is a reproduction of a bug in Wrangler on Windows.

The file named [`public/🙂🙂🙂/index.html`](./public/🙂🙂🙂/index.html) is served correctly on `/🙂🙂🙂` on Linux and macOS, but not on Windows.
