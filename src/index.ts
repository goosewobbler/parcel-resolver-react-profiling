import { Resolver } from '@parcel/plugin'

const resolveMap = {
  'react-dom': 'react-dom/profiling',
  'scheduler/tracing': 'scheduler/tracing-profiling',
}

export = new Resolver({
  async resolve({ specifier }) {
    const toResolve = resolveMap[specifier as keyof typeof resolveMap]
    if (process.env.REACT_PROFILING !== undefined && toResolve) {
      return {
        filePath: require.resolve(toResolve),
      }
    }

    return null
  },
})
