export default function checkKey(inputKey, typeKey) {
    if (typeKey === '—' || typeKey === '–') {
        typeKey = '-';
    }

    if (typeKey === '«' || typeKey === '»') {
        typeKey = '"';
    }

    if (typeKey === 'ё') {
        typeKey = 'е';
    }

    switch (inputKey) {
        case typeKey:
            return 1;
        case 'Shift': case 'CapsLock': case 'Alt': case 'Control':
            return -1;
        default:
            return 0;
    }
}