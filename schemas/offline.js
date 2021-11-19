const offlineSchema = {
  name: "offline",
  type: "document",
  title: "Offline",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (Rule) => Rule.required().error("Krever en tittel"),
    },
    {
      name: "pdf",
      title: "Offline PDF fil",
      type: "file",
    },
    {
      name: "release_date",
      title: "Utgivelse dato",
      type: "date",
    },
    {
      name: "thumbnail",
      title: "Bilde av forsiden",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

export default offlineSchema;
