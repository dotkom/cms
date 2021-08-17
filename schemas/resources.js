export default {
  name: "resource",
  type: "document",
  title: "Ressurser",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (Rule) => Rule.required().error("krever en tittel"),
    },
    {
      name: "description",
      title: "Beskrivelse",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required().error("krever en beskrivelse"),
    },
    {
      name: "thumbnail",
      title: "Ressurs bilde",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "image_description",
          type: "string",
          title: "Bildebeskrivelse",
          validation: (Rule) =>
            Rule.required().error(
              "Bildet trenger en beskrivelse. Trykk på 'Edit details'"
            ),
        },
      ],
    },
  ],
};
