/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3165375535")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "bool3425334625",
    "name": "isImage",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3165375535")

  // remove field
  collection.fields.removeById("bool3425334625")

  return app.save(collection)
})
