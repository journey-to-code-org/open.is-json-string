# open.is-json-string

Small dependency-free JSON-string validation without exception handling at call sites.

## Install

```bash
npm install @journey-to-code/open-is-json-string
```

## Usage

```js
isJsonString('{"a":1}'); // true
tryParseJson(input); // { ok: true, value } or { ok: false, error }
```

## Runtime

- Node.js 18+
- modern ESM-capable tooling
- zero runtime dependencies

## Development

```bash
npm test
```

## Scope

This package intentionally focuses on one small, reusable responsibility.
Application-specific behavior belongs in higher-level packages.

## License

MIT
