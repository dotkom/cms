import S from "@sanity/desk-tool/structure-builder";

const deskStructure = () =>
  S.list()
    .title("Content")
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["committees", "articles", "portals", "users"].includes(
            listItem.getSchemaType().name
          )
      ),

      S.listItem()
        .title("Wiki Re-Reborn")
        .child(
          S.list()
            .title("Content")
            .items(
              S.documentTypeListItems().filter((listItem) =>
                ["committees", "articles", "portals", "users"].includes(
                  listItem.getSchemaType().name
                )
              )
            )
        ),
    ]);

export default deskStructure;
