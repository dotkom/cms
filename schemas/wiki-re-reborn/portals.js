const portalSchema = {
  title: "Portals",

  // The identifier for this document type used in the api's
  name: "portals",

  // Documents have the type 'document'. Your schema may describe types beyond documents
  // but let's get back to that later.
  type: "document",

  // Now we proceed to list the fields of our document
  fields: [
    {
      title: "Name",

      name: "name",

      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",

      name: "description",

      type: "string",
    },
    {
      title: "Category",

      name: "category",

      type: "string",
      options: {
        list: [
          { title: "General", value: "general" },
          { title: "Online", value: "online" },
          { title: "Committee", value: "committee" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default portalSchema;
