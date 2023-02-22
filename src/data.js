const { nanoid } = require("nanoid");

const generateId = () => {
  return nanoid()
}

const dataTodo = []

export {dataTodo, generateId}
