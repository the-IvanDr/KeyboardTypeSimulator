export default function checkKey(inputKey, typeKey) {
    switch(inputKey){
        case typeKey:
            return 1;
        case 'Shift': case 'CapsLock': case 'Alt': case 'Control':
            return -1;
        default:
            return 0;
    }
}