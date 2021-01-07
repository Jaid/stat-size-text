import prettyBytes from "pretty-bytes"
import statSize from "stat-size"

/** @module stat-size-text */

/**
 * @param {string} file
 * @return {Promise<string>}
 */
export default async file => {
  const size = await statSize(file)
  if (size === null) {
    return "[not found]"
  }
  return prettyBytes(size)
}