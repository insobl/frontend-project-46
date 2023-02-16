import fs from 'fs';
import parseFile from './parsers.js';



const getAbsolutePath = (filepath) => resolve(cwd(), filepath);
const getFormat = (filepath) => filepath.split('.')[1];
const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');
function gendiff (filepath1, filepath2, formatName = 'stylish'){
const pathFile1 = getAbsolutePath(filepath1);
const pathFile2 = getAbsolutePath(filepath2);
const dataFile1 = readFile(pathFile1)
const dataFile2 = readFile(pathFile2)
const formatFile1 = getFormat(filepath1);
const formatFile2 = getFormat(filepath2)
}