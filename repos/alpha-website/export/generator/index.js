
const fs = require('fs');
const path = require('path');

const Asset = require('./Asset');
const ContentType = require('./ContentType');
const Locale = require('./Locale');

const Person = require('./content-types/Person');
const Post = require('./content-types/Post');
const Page = require('./content-types/Page');
const Product = require('./content-types/Product');

class ContentFile {

    contentTypes = new Array();
    entries = new Array();
    assets = new Array();
    locales = new Array();
    webhooks = new Array();
    roles = new Array();
    editorInterfaces = new Array();

    constructor() {
        this.locales.push(new Locale('en-US'));
        this.locales.push(new Locale('nl'));
        this.contentTypes.push(
            new ContentType('person'),
            new ContentType('post'),
            new ContentType('page'),
            new ContentType('product'),
        );
        this.assets.push(
            new Asset(
                'Hero',
                'This is a Hero picture'
            )
        );
        this.entries.push(
            new Person(
                'John Doe',
                'Web Developer',
                'Research and recommendations for modern stack websites.',
                '',
                this.assets[0].sys.id
            ),
            new Post(
                'First post',
                'My first post'
            ),
            new Page(
                'privacy',
                'Privacy'
            ),
            new Product(
                'Book',
                'My book title'
            )
        );
    }
}

fs.writeFileSync(
    path.join(__dirname, '../contentful-export-initial-generated.json'),
    JSON.stringify(new ContentFile(), null, 4)
);

console.log('Done generating file contentful-export-initial-generated.json. Now run below command.');
console.log('contentful space import --content-file export/contentful-export-initial-generated.json --config .contentful.json');
