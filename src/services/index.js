

export let _barCode = 0;

export const  _setBarcode = code => {
    console.log(`Substituindo barcode ${_barCode} por ${code}`);
    _barCode = code;
    console.log(`Novo barcode: ${_barCode}`);
}

export const _getBarcodes = () => {
    return _barCode;
}