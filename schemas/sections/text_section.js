import sectionPreview from "./section_preview";

const textSection = {
  title: "Text Section",
  name: "text_section",
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
  ],
  preview: sectionPreview,
};

export default textSection;
