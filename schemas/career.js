const careerSchema = {
    name: "career",
    type: "document",
    title: "Karriere",
    fields: [
        {
            name: "title",
            title: "Tittel",
            type: "string",
            validation: (Rule) => Rule.required().error("Krever en tittel"),
        },
        {
            name: "company_name",
            title: "Navn på bedrift",
            type: "string",
        },
        {
            name: "image",
            title: "Bilde",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "career_type",
            title: "Ansettelsesform",
            type: "string",
        },
        {
            name: "location",
            title: "Sted",
            type: "string",
        },
        {
            name: "deadline",
            title: "Frist",
            type: "date",
        },
        {
            name: "company_info",
            title: "Informasjon om bedriften",
            type: "text",
        },
        {
            name: "content",
            title: "Innhold",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "link",
            title: "Søknadslink",
            type: "url",
        },
    ],
};
export default careerSchema;
