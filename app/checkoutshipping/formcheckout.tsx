import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldGroup,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ArrowRight } from "lucide-react";

function FormCheckout() {
  return (
    <main className="lg:w-[788px]">
      <h2 className="text-[20px] font-bold">Contact Information</h2>

      <form className="flex flex-col gap-6 mt-6">
        <InputEmail />
        <h2 className="text-[20px] font-bold">Shipping Addres</h2>
        <InputAddressName />
        <InputAddres />
        <InputCityStateZip />
        <InputContryPhone />
        <div className="flex items-center mb-4 gap-2">
          <Checkbox />
          <p className="text-[14px] font-medium text-gray">Save shipping information for future express purchases</p>
        </div>
        <Separator />

        <div className="flex justify-between">
          <button className="flex items-center">
            <ChevronLeft className="w-3 h-3 text-gray"/>
            <p className="text-gray md:text-[10px] lg:text-[14px]">Return To Cart</p>
          </button>

          <Button className="flex items-center bg-logo/90 hover:bg-logo text-white rounded-md">
            <p className="text-[16px] font-bold">Continue to payment</p> 
            <ArrowRight className="w-4 h-4"/>
          </Button>
        </div>
      </form>
    </main>
  );
}

export default FormCheckout;

//===================================
// INPUT EMAIL
//===================================
function InputEmail() {
  return (
    <Field data-email>
      <FieldLabel className="text-[13px] font-semibold text-gray" htmlFor="input-email">Email Addres</FieldLabel>
      <Input id="input-email" type="email" placeholder="Email" />
      <FieldDescription className="hidden text-[#FF4F5A]">
        Email does not match
      </FieldDescription>
    </Field>
  );
}

//===================================
// INPUT NAME
//===================================
function InputAddressName() {
  return (
    <FieldGroup className="grid grid-cols-2">
      <Field>
        <FieldLabel className="text-[13px] font-semibold text-gray" htmlFor="first-name">First Name</FieldLabel>
        <Input id="first-name" placeholder="Jordan" />
      </Field>
      <Field>
        <FieldLabel className="text-[13px] font-semibold text-gray" htmlFor="last-name">Last Name</FieldLabel>
        <Input id="last-name" placeholder="Lee" />
      </Field>
    </FieldGroup>
  );
}

//===================================
// INPUT ADDRES
//===================================
function InputAddres() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel className="text-[13px] font-semibold text-gray" htmlFor="form-address">Address Line 1</FieldLabel>
        <Input id="form-address" type="text" placeholder="123 Main St" />
      </Field>
      <Field>
        <FieldLabel className="text-[13px] font-semibold text-gray" htmlFor="form-address-2">Address Line 2</FieldLabel>
        <Input
          id="form-address-2"
          type="text"
          placeholder="Apartment, suite, etc. (optional)"
        />
      </Field>
    </FieldGroup>
  );
}

//===================================
// INPUT City
//===================================
function InputCityStateZip() {
  return (
    <FieldGroup className="grid grid-cols-3 gap-2">
      <Field>
        <FieldLabel className="text-[13px] font-semibold text-gray" htmlFor="city">City</FieldLabel>
        <Input id="city" placeholder="City" />
      </Field>
      <Field>
        <FieldLabel className="text-[13px] font-semibold text-gray" htmlFor="state">State</FieldLabel>
        <Input id="state" placeholder="State" />
      </Field>
      <Field>
        <FieldLabel className="text-[13px] font-semibold text-gray" htmlFor="zip">ZIP / Postal</FieldLabel>
        <Input id="zip" placeholder="ZIP" />
      </Field>
    </FieldGroup>
  );
}

//================================
// INPUT REGION
//================================
function InputContryPhone() {
  return (
    <FieldGroup className="grid grid-cols-2 gap-2">
      <Field>
        <FieldLabel className="text-[13px] font-semibold text-gray" htmlFor="country">Country / Region</FieldLabel>
        <Input id="country" placeholder="Country / Region" />
      </Field>
      <Field>
        <FieldLabel className="text-[13px] font-semibold text-gray" htmlFor="phone">Phone Number</FieldLabel>
        <Input id="phone" type="tel" placeholder="Phone Number" />
      </Field>
    </FieldGroup>
  );
}
