module.exports = class Asset {

    sys = {
        id: '',
        publishedVersion: 1,
        version: 1,
        contentType: {
            sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'person'
            }
        }
    }
    fields;

    constructor(title, description) {
        const width = 640;
        const height = 400;
        this.sys.id = Buffer.from(encodeURI(title)).toString('hex');
        this.fields = {
            title: {
                'en-US': title
            },
            description: {
                'en-US': description
            },
            file: {
                'en-US': {
                    url: `//placeimg.com/${ width }/${ height }/any`,
                    fileName: `${ description.toLowerCase().split(' ').join('-') }.jpeg`,
                    contentType: `image/jpeg`,
                    image: {
                        width,
                        height
                    }
                }
            }
        }
    }
}
