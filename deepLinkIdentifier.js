class deepLinkIdentifier {
    constructor(url) {
        this.scheme = url.split('://')[0] === 'visma-identity' ? 'visma-identity' : 'not valid';  //string

        this.action = url.split('://')[1].split('?')[0]; //string
        if (this.action !== 'login' && this.action !== 'confirm' && this.action !== 'sign') this.action = 'not valid';

        this.parameters = {};
        let params = url.split('?')[1].replaceAll('&', '=').split('='); // array: even - key, odd - value
        switch (this.action){ // extracting parameters key-value from array of params
            case 'login':
                for (let i = 0; i <= params.length; i++) {
                    if (params[i] === 'source') this.parameters.source = params[i+1];
                };
            case 'confirm':
                for (let i = 0; i < params.length; i++) {
                    if (params[i] === 'source') this.parameters.source = params[i+1];
                    if (params[i] === 'paymentnumber') this.parameters.paymentnumber = params[i+1];
                };
            case 'sign':
                for (let i = 0; i < params.length; i++) {
                    if (params[i] === 'source') this.parameters.source = params[i+1];
                    if (params[i] === 'documentid') {
                        this.parameters.documentid = params[i+1];
                    }
                };
        }

    }
    getAction() {
        return this.action;
    }
    getParameters(key) {
        if (typeof(this.parameters[key]) !== 'undefined') return this.parameters[key];
        return key + ' does not exist';
    }
}

module.exports = deepLinkIdentifier;