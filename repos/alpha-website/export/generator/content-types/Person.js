module.exports = class Person {

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

    constructor(name, title, shortBio, email = '', imageId) {
        this.sys.id = Buffer.from(encodeURI(name)).toString('hex');
        this.fields = {
            name: {
                'en-US': name
            },
            title: {
                'en-US': title
            },
            shortBio: {
                'en-US': shortBio,
                'nl': shortBio.split('').reverse().join('')
            },
            email: {
                'en-US': email
            },
            image: {
                'en-US': {
                  sys: {
                    type: 'Link',
                    linkType: 'Asset',
                    id: imageId
                  }
                }
            }
        }
    }
}
