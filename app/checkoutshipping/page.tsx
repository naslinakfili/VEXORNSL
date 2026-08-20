import NavCheckout from "./navigation"
import FormCheckout from "./formcheckout"
import OrderSummary from "./ordersummary"
import Footer from "@/app/component/footersection"
function CheckoutShipping() {
    return(
        <div className="md:px-4 lg:px-16">
            <NavCheckout />
            <div className="flex gap-16 mb-20">
                <FormCheckout />
                <OrderSummary />
            </div>
            <Footer />
        </div>
    )
}

export default CheckoutShipping