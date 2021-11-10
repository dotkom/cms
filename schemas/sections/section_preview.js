/**
 * Sets the preview text of the the section name to the section_name
 */
const sectionPreview = {
  select: {
    section_name: "section_name",
  },
  prepare: ({ section_name }) => {
    return {
      title: section_name
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
    };
  },
};
export default sectionPreview;
