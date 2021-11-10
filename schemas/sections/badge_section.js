import sectionPreview from "./section_preview";

const badgeSection = {
  title: "Badge Section",
  name: "badge_section",
  type: "object",
  fields: [
    {
      title: "Section Name",
      name: "section_name",
      type: "string",
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Badges",
      name: "badges",
      type: "array",
      of: [
        {
          title: "Badge",
          name: "badge",
          type: "object",
          fields: [
            {
              name: "badge_title",
              type: "string",
            },
            {
              name: "badge_url",
              type: "image",
            },
          ],
        },
      ],
    },
  ],
  preview: sectionPreview,
};

export default badgeSection;
