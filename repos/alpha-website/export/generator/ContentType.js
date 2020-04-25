module.exports = class ContentType {

    sys = {
        id: '',
        publishedVersion: 1,
        version: 1
    };
    displayField = 'name';
    name = '';
    description = '';
    fields = new Array();
    
    constructor(name) {
        this.sys.id = name.toLowerCase();
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        if (name === 'person') this.setFieldsPerson();
    }

    setFieldsPerson() {
        this.fields.push({
            id: 'name',
            name: 'Name',
            type: 'Symbol',
            localized: false,
            required: true,
            validations: [],
            disabled: false,
            omitted: false
        });
        this.fields.push({
            id: 'title',
            name: 'Title',
            type: 'Symbol',
            localized: false,
            required: true,
            validations: [],
            disabled: false,
            omitted: false
        });
        this.fields.push({
            id: 'shortBio',
            name: 'Short Bio',
            type: 'Text',
            localized: true,
            required: true,
            validations: [],
            disabled: false,
            omitted: false
        });
        this.fields.push({
            id: 'email',
            name: 'Email',
            type: 'Symbol',
            localized: false,
            required: false,
            validations: [],
            disabled: false,
            omitted: false
        });
        this.fields.push({
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
    }
}
