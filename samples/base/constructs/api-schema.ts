import * as fs from 'fs';
import * as path from 'path';
import * as mergeGraphqlSchemas from 'merge-graphql-schemas';

const paths = {
    schemasIn: path.join(__dirname, '../graphql/**/(*.graphql|!(schema.graphql))'),
    schemaOutDir: path.join(__dirname, '../graphql/__generated__'),
    schemaFileName: 'schema.graphql'
};

export class ApiSchema {

    private schemaString = '';

    constructor() {
        this.init();
    }

    init(): void {
        if (!fs.existsSync(paths.schemaOutDir)) {
            fs.mkdirSync(paths.schemaOutDir);
        }
        const typesArray = mergeGraphqlSchemas.fileLoader(paths.schemasIn);
        this.schemaString = mergeGraphqlSchemas.mergeTypes(typesArray, { all: true });
        fs.writeFileSync(path.join(paths.schemaOutDir, paths.schemaFileName), this.schemaString);
    }

    asString(): string {
        return this.schemaString;
    }
}
