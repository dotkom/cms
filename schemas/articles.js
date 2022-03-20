const articleSchema = {
    name: "article",
    type: "document",
    title: "Artikkel",
    fields: [
        {
            name: "title",
            title: "Tittel",
            type: "string",
            validation: (Rule) => Rule.required().error("Krever en tittel"),
        },
        { name: "author", title: "Forfatter", type: "string" },

        { name: "photographer", title: "Fotograf", type: "string" },

        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
        },
        {
            name: "published_date",
            title: "Publisert dato",
            type: "date",
        },
        {
            name: "cover_image",
            title: "Forsidebilde",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "slug",
            title: "slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: "80",
            },
        },
        { name: "excerpt", title: "Ingress", type: "text" },
        {
            name: "content",
            title: "Innhold",
            type: "array",
            of: [
                { type: "block" },
                {
                    type: "image",
                    options: {
                        hotspot: true,
                    },
                },
            ],
        },
    ],
    initialValue: { published_date: new Date().toLocaleDateString() },
};

export default articleSchema;
