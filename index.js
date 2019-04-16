customerName = "bob"

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName
}

function setBestCustomer() {
    bestCustomer = "not bob"
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "maybe me"

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "it's me"
}