function reg(str){
    alphabetMap = {
        'А' : 'A',
        'В' : 'B',
        'С' : 'C',
        'Е' : 'E',
        }
    if(alphabetMap[str]){
        return alphabetMap[str];
    }
    else{
        return '';
    }
};

function addTwoPoints(str){
    if(str.length >= 3 && str[2] != ':'){
        str = `${str.slice(0,2)}:${str.slice(2)}`;
    }
    if(str.length >= 6 && str[5] != ':'){
        str = `${str.slice(0,5)}:${str.slice(5)}`;
    }
    if(str.length >= 9 && str[8] != ':'){
        str = `${str.slice(0,8)}:${str.slice(8)}`;
    }
    if(str.length >= 12 && str[11] != ':'){
        str = `${str.slice(0,11)}:${str.slice(11)}`;
    }
    if(str.length >= 15 && str[14] != ':'){
        str = `${str.slice(0,14)}:${str.slice(14)}`;
    }
    return str;
}

module.exports = function removeCc(str){

    str = str.toUpperCase();
    str = str.replace(/[^A-FА-Я0-9]/g, '');
    str = str.replace(/[А-Я]/g, reg);
    str = addTwoPoints(str);
    if(str.length >= 17){
        return str.slice(0,17).toUpperCase();
    }
    return str;
};



