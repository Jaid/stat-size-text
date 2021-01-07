import path from "path"

const indexModule = require(process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src"))
const {default: statSizeText} = indexModule

it("should run", async () => {
  const file = path.join(__dirname, "pikachu_8x8.png")
  const size = await statSizeText(file)
  expect(size).toBe(129)
})

it("should return null for missing files", async () => {
  const file = path.join(__dirname, "pikachu_9x9.png")
  const size = await statSizeText(file)
  expect(size).toBe(null)
})