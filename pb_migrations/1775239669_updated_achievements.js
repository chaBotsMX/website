/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2260351736")

  // update collection data
  unmarshal({
    "name": "competitions"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2260351736")

  // update collection data
  unmarshal({
    "name": "achievements"
  }, collection)

  return app.save(collection)
})
