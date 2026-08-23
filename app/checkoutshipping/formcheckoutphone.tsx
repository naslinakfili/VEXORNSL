import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldContent,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function FormOrderHandphone() {
  return (
    //=============================
    // no completed one element please (Order Summary)!
    //============================
    <div className="min-h-screen flex flex-col justify-between">
      <form action="" className="">
        <h1 className="text-[14px] font-bold mb-3">Shipping Details</h1>
        <InputGroup />
        <RadioGrouppayment />
      </form>
      <div className="sticky bottom-0 bg-background pt-4 pb-4 mt-auto flex flex-col gap-4">
          <Button className="w-full h-11 bg-logo/90 hover:bg-logo">
            <p>Place Order -- $259.99</p>
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            By placing your order, you agree to our Terms of Service and Privacy Policy.
          </p>
      </div>
    </div>
  );
}

function InputGroup() {
  return (
    <FieldGroup className="mb-5">
      <Field>
        <FieldLabel 
        htmlFor="fieldgroup-name"
        className="text-[10px] font-semibold text-gray"
        >Full Name</FieldLabel>
        <Input 
        id="fieldgroup-name" 
        type="text" 
        placeholder="Jordan Lee"
        className="pl-3 h-11 text-[13px]" />
      </Field>
      <Field>
        <FieldLabel 
        htmlFor="fieldgroup-phone"
        className="text-[10px] font-semibold text-gray"
        >Phone Number</FieldLabel>
        <Input
          id="fieldgroup-email"
          type="tel"
          placeholder="(+62) 9505 6111 20 "
          className="text-[13px] h-11 pl-3"
        />
      </Field>
    </FieldGroup>
  );
}

function RadioGrouppayment() {
  return (
    <RadioGroup defaultValue="" className="">
        <h2 className="text-[14px] font-bold mb-3">Payment Method</h2>
      <FieldLabel 
      htmlFor="ApplePay-payment"
      className="mb-2">
        <Field orientation="horizontal" className="h-10">
          <RadioGroupItem value="ApplePay" id="ApplePay-payment" />
          <FieldContent>
            <FieldTitle className="text-[12px] font-semibold ">Apple Pay</FieldTitle>
          </FieldContent>
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="CreditCard-payment">
        <Field orientation="horizontal" className="h-10">
          <RadioGroupItem value="CreditCard" id="CreditCard-payment" />
          <FieldContent>
            <FieldTitle className="text-[12px] font-semibold">Credit Card</FieldTitle>
          </FieldContent>
        </Field>
      </FieldLabel>
    </RadioGroup>
  );
}
