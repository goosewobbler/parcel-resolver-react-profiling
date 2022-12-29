# React Profiling Resolver for Parcel

### Install

`npm i -D parcel-resolver-react-profiling`
`pnpm i -D parcel-resolver-react-profiling`
`yarn add -D parcel-resolver-react-profiling`

### Usage

`.parcelrc`:

```json
{
  "extends": "@parcel/config-default",
  "resolvers": ["parcel-resolver-react-profiling", "..."]
}
```

Run parcel with the REACT_PROFILING env var:

```bash
REACT_PROFILING=true parcel serve index.html
```

### Inspiration:

https://gist.github.com/bvaughn/25e6233aeb1b4f0cdb8d8366e54a3977?permalink_comment_id=4166747#gistcomment-4166747
