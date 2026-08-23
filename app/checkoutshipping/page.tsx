import NavCheckout from "./navigation"
import NavCheckoutphone from "./navigationphone"
import FormCheckout from "./formcheckout"
import OrderSummary from "./ordersummary"
import Footer from "@/app/component/footersection"
import FormOrderHandphone from "./formcheckoutphone"
function CheckoutShipping() {
    return(
        <main className="min-h-screen px-4 lg:px-16">
            <div className="md:flex hidden">
                <NavCheckout />
            </div>
            
            <div className="md:flex hidden gap-16 mb-20">
                <FormCheckout />
                <OrderSummary />
            </div>

            {/* handphone device */}

            <div>
                <NavCheckoutphone />
            </div>

            <div className="h-full">
                <FormOrderHandphone />
            </div>

            {/* all device */}
            <Footer />
        </main>
    )
}

export default CheckoutShipping