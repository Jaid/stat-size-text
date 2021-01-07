import fs from "fs/promises"

/** @module stat-size-text */

/**
 * @param {string} mimeType
 * @param {Buffer} buffer
 * @return {Promise<string>}
 */
export default async file => {
  try {
    const stat = await fs.stat(file)
    return stat.size
  } catch (error) {
    if (error.code === "ENOENT") {
      return null
    }
    throw error
  }
}