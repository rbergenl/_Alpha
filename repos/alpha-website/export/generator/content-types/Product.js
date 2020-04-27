module.exports = class Product {

    sys = {
        id: '',
        publishedVersion: 1,
        version: 1,
        contentType: {
            sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'product'
            }
        }
    }
    fields;

    constructor(name, title) {
        this.sys.id = Buffer.from(encodeURI(name)).toString('hex');
        this.fields = {
            name: {
                'en-US': name
            },
            title: {
                'en-US': title
            }
        }
    }
}
