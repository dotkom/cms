const userSchema = {
  title: "Users",
  name: "users",
  type: "document",

  fields: [
    {
      title: "Username",
      name: "username",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Email",
      name: "email",
      type: "string",
      validation: (Rule) => [
        Rule.required(),
        Rule.custom((input) => {
          if (
            !input.match(
              /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            )
          ) {
            return "Not a valid email address";
          }
          return true;
        }),
      ],
    },
    {
      title: "Committee",

      name: "committee",

      type: "reference",
      to: [{ type: "committees" }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "JWT",

      name: "jwt",

      type: "string",

      readOnly: true,
    },
  ],
};

export default userSchema;
