
function indianCurrency(price:number) {
    
    const formatCurrency = Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2
    })
    return formatCurrency.format(price)
}

export default indianCurrency;