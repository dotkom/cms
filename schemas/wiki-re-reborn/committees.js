const committeeSchema = {
  title: "Committees",

  name: "committees",

  type: "document",

  fields: [
    {
      title: "Name",

      name: "name",

      type: "string",

      validation: (Rule) => Rule.required(),
    },
  ],
};

export default committeeSchema;
