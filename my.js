function check_price() {
    let fruit = document.getElementById('fruits').value;
    switch (fruit){
        case 'Oi':
            price = 20000;
            fruit_name = 'Ổi'
            break;
        case 'Dua-hau':
                price = 20000;
                fruit_name = 'Dưa hấu'
                break;
        case 'Tao':
            price = 30000;
            fruit_name = 'Táo'
            break;
        case 'Xoai':
            price = 30000;
            fruit_name = 'Xoài'
            break;
        case 'Cam':
            price = 40000;
            fruit_name = 'Cam'
            break;
        case 'Chom-Chom':
            price = 40000;
            fruit_name = 'Chôm Chôm'
            break;
        case 'Mang-cut':
            price = 50000;
            fruit_name = 'Măng cụt'
            break;
    }
    document.getElementById('result').innerHTML = 'Giá '+fruit_name+' là: '+price+ ' VNĐ/kg.'

}