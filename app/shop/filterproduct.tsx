  "use client"
import { useState, } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator"
import {
  Field,
  FieldLabel,
} from "@/components/ui/field";
import {
  Star,
} from "lucide-react";
import {
  Card,
} from "@/components/ui/card";


export default function CardPriceRange() {
    const [priceRange, setPriceRange] = useState<number[]>([0, 500]);
  return (
    <Card className="w-fit h-fit px-4 py-6 dark:bg-surface">
      <div className="flex flex-col gap-4 pb-8">
        <h3 className="text-[14px] font-bold">PRICE RANGE</h3>
        <Slider
          defaultValue={[25, 50]}
          max={100}
          step={5}
          className="mx-auto w-full max-w-xs "
        />
        <div className="flex justify-between text-[12px] text-gray">
          <p>$0</p>
          <p>$500</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 mb-8">
        <h3 className="text-[14px] font-bold">CATEGORY</h3>
        <div className="flex flex-col gap-3 text-[13px] text-gray">
          <Field orientation="horizontal">
            <Checkbox className="data-[state=checked]:border-logo"/>
            <FieldLabel htmlFor="five-star">Over-Ear Headphones</FieldLabel>
          </Field>

          <Field orientation="horizontal">
            <Checkbox className="data-[state=checked]:border-logo" />
            <FieldLabel htmlFor="five-star">Wireless Earbuds</FieldLabel>
          </Field>

          <Field orientation="horizontal">
            <Checkbox className="data-[state=checked]:border-logo" />
            <FieldLabel htmlFor="five-star">Dekstop Audio</FieldLabel>
          </Field>

          <Field orientation="horizontal">
            <Checkbox className="data-[state=checked]:border-logo" />
            <FieldLabel htmlFor="five-star">Portable Speaker</FieldLabel>
          </Field>
        </div>
      </div>

        <Separator />

      <div className="flex flex-col gap-3 my-8">
        <h3 className="text-[14px] font-bold">MIN RATING</h3>
        <RadioGroup className="flex flex-col gap-3 text-white">
          <Field orientation="horizontal">
            <RadioGroupItem value="5star" id="five-star" className="w-4 h-4" />
            <FieldLabel htmlFor="five-star">
              <Star className="w-3 h-3 text-logo fill-current" />
              <Star className="w-3 h-3 text-logo fill-current" />
              <Star className="w-3 h-3 text-logo fill-current" />
              <Star className="w-3 h-3 text-logo fill-current" />
              <Star className="w-3 h-3 text-logo fill-current" />
            </FieldLabel>
          </Field>

          <Field orientation="horizontal">
            <RadioGroupItem value="4star" id="four-star" className="w-4 h-4" />
            <FieldLabel htmlFor="four-star">
              <Star className="w-3 h-3 text-logo fill-current" />
              <Star className="w-3 h-3 text-logo fill-current" />
              <Star className="w-3 h-3 text-logo fill-current" />
              <Star className="w-3 h-3 text-logo fill-current" />
            </FieldLabel>
          </Field>

          <Field orientation="horizontal">
            <RadioGroupItem value="3star" id="tree-star" className="w-4 h-4" />
            <FieldLabel htmlFor="tree-star">
              <Star className="w-3 h-3 text-logo fill-current" />
              <Star className="w-3 h-3 text-logo fill-current" />
              <Star className="w-3 h-3 text-logo fill-current" />
            </FieldLabel>
          </Field>
        </RadioGroup>
      </div>

        <Separator />

      <div className="mt-8">
        <Field orientation="horizontal" className="flex items-center h-5">
          <FieldLabel htmlFor="stock" className="text-[14px] font-bold">IN STOKY ONLY</FieldLabel>
          <Switch id="stock" className="w-9! h-5! focus:bg-logo" />
        </Field>
      </div>
    </Card>
  );
}