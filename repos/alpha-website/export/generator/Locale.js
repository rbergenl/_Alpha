module.exports = class Locale {

    sys = {
        id: '',
        publishedVersion: 1,
        version: 1
    }
    name;
    contentManagementApi = true;
    contentDeliveryApi = true;
    optional = false;
    default;

    constructor(code) {
        if (code !== 'nl' && code !== 'en-US') throw new Error('invalid locale');
        this.name = code === 'nl' ? 'Dutch' : 'en-US' ? 'English (United States)' : '';
        this.code = code;
        this.fallbackCode = code !== 'en-US' ? 'en-US' : null;
        this.default = !!(code === 'en-US')
    }
}
