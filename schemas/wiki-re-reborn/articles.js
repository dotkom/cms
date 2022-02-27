const articleSchema = {
    // This is the display name for the type
    title: "Wiki Articles",

    // The identifier for this document type used in the api's
    name: "wiki-articles",

    // Documents have the type 'document'. Your schema may describe types beyond documents
    // but let's get back to that later.
    type: "document",

    // Now we proceed to list the fields of our document
    fields: [
        // This document has only one field
        {
            // The display name for this field
            title: "Title",

            // The identifier for this field used in the api's
            name: "title",

            // The type of this field
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 200, // will be ignored if slugify is set
                slugify: (input) =>
                    input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
            },
            validation: (Rule) => Rule.required(),
        },
        {
            // The display name for this field
            title: "Excerpt",

            // The identifier for this field used in the api's
            name: "excerpt",

            // The type of this field
            type: "text",

            validation: (Rule) => [
                Rule.required(),
                Rule.min(25),
                Rule.max(250),
            ],
        },
        {
            // The display name for this field
            title: "Content",

            // The identifier for this field used in the api's
            name: "body",

            // The type of this field
            type: "text",
            of: [{ type: "block" }],
            validation: (Rule) => [Rule.required(), Rule.min(25)],
        },
        {
            // The display name for this field
            title: "History",

            // The identifier for this field used in the api's
            name: "history",

            // The type of this field
            type: "string",
        },
        {
            // The display name for this field
            title: "Views",

            // The identifier for this field used in the api's
            name: "views",

            // The type of this field
            type: "number",
            initialValue: 0,
            readOnly: true,
            validation: (Rule) => Rule.min(0),
        },
        {
            // The display name for this field
            title: "Portal",

            // The identifier for this field used in the api's
            name: "portal",

            // The type of this field
            type: "reference",
            to: [{ type: "portals" }],
            validation: (Rule) => Rule.required(),
        },
        {
            // The display name for this field
            title: "Protection Level",

            // The identifier for this field used in the api's
            name: "protection_level",

            // The type of this field
            type: "string",
            options: {
                list: [
                    { title: "Protected", value: "protected" },
                    { title: "Limited", value: "limited" },
                    { title: "Open", value: "open" },
                ],
            },
            initialValue: "protected",
            validation: (Rule) => Rule.required(),
        },
    ],
};

export default articleSchema;
