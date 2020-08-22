# Content Types

Working with a Content Management System requires knowledge of common concepts. These are described here.

- [General Rules](#general-rules)
- [Content Types](#content-types)
- [Components](#components)

## General Rules

- Content Types names should be `PascalCase`.
- Field names should be `snake_case`.
- Should content be reusable, make it a Collection Type (blog posts).
- Never create a Single Type, prepare for the future and make it a Collection Type instead (menu).
- Are a group of fields reusable, make the fields a Component (seo).
    - When a component is specific to a Content Type, create the component for category with name of the Content Type (slider).
- Use Dynamic Zone to allow an editor to pick none or any component in any order.

## Content Types

Both Collection Type and Single Type are types of Content Type.

### Collection Type

Collection Type is used for content that repeats such as restaurants, or blog posts (hence "collection").

### Single Type

Single Type is used to manage content that will have only one instance - for example, your menu, a static page, or a footer.

## Components

- Prefix each field with the name of the component (`seo_og_description`). This is when multiple components are used in a Dynamic Zone, the fields will be unique (all component fields will be grouped).
