
const fs = require('fs');
const path = require('path');

const contents = {
    contentTypes: [],
    entries: [],
    assets: [],
    locales: [],
    webhooks: [],
    roles: [],
    editorInterfaces: []
}

contents.contentTypes.push(contentType());

fs.writeFileSync(path.join(__dirname, './contentful-export-initial-generated.json'), JSON.stringify(contents, null, 4));


function contentType() {
    const fields = new Set();

    fields.add({
        id: 'name',
        name: 'Name',
        type: 'Symbol',
        localized: false,
        required: true,
        validations: [],
        disabled: false,
        omitted: false
    });

    fields.add({
        id: 'title',
        name: 'Title',
        type: 'Symbol',
        localized: false,
        required: true,
        validations: [],
        disabled: false,
        omitted: false
    });

    fields.add({
        id: 'shortBio',
        name: 'Short Bio',
        type: 'Text',
        localized: false,
        required: true,
        validations: [],
        disabled: false,
        omitted: false
    });

    fields.add({
        id: 'email',
        name: 'Email',
        type: 'Symbol',
        localized: false,
        required: false,
        validations: [],
        disabled: false,
        omitted: false
    });

    fields.add({
        id: 'image',
        name: 'Image',
        type: 'Link',
        localized: false,
        required: false,
        validations: [],
        disabled: false,
        omitted: false,
        linkType: 'Asset'
    });
   
    const contentType = {
        sys: {
            id: '',
            publishedVersion: 1,
            version: 1
        },
        displayField: '',
        name: '',
        description: '',
        fields: []
    };

    contentType.sys.id = 'person';
    contentType.displayField = 'name';
    contentType.name = 'Person';
    fields.forEach((field) => contentType.fields.push(field));

    return contentType;
}
