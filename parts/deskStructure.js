import S from "@sanity/desk-tool/structure-builder";

const deskStructure = () =>
  S.list()
    .title("Content")
    .items([
      ...getItems(false),

      S.listItem()
        .title("Wiki Re-Reborn")
        .child(S.list().title("Content").items(getItems(true))),
    ]);

const getItems = (setWikiItems) => {
  const wikiItems = ["committees", "articles", "portals", "users"];

  return S.documentTypeListItems().filter((listItem) =>
    setWikiItems
      ? wikiItems.includes(listItem.getSchemaType().name)
      : !wikiItems.includes(listItem.getSchemaType().name)
  );
};

export default deskStructure;
