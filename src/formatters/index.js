import formatStylish from './stylish.js'
export default function (data, formatName) {
    switch (formatName) {
      case 'stylish':
        return formatStylish(tree);
      default:
        throw new Error(
          `${formatName} is not supported.\n Supported formats: stylish - default`);
    }
  }