import YAML from 'js-yaml';

export default function (data, format) {
switch(format){
    case 'json':
        return JSON.parse(data);
    case 'yml':
        return YAML.load(data);
    case 'yaml':
        return YAML.load(data);
    default:
        throw new Error((`${format} is not supported.\nSupported formats: js, yml, yaml`))            
    }
}