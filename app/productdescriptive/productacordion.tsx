import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    value: "item-1",
    triggerhead: "Acoustic System",
    triggerdes:
      "40mm custom dynamic drivers engineered for ultra-low distortion across audible rabge",
    content:
      "Experience rich, detailed audio with our custom-engineered 40mm dynamic drivers, designed to minimize distortion across the full frequency spectrum and deliver crystal-clear highs, detailed mids, and deep bass.",
  },
  {
    value: "item-2",
    triggerhead: "Noise Canceltaion",
    triggerdes:
      "Hybride active canceltaion width 4 diagnostic microphones constantly filerig cabin sound",
    content:
      "Block out unwanted external noise using advanced hybrid active noise cancellation powered by 4 diagnostic microphones that continuously filter ambient cabin sounds for an immersive audio experience.",
  },
  {
    value: "item-3",
    triggerhead: "Power & Battery",
    triggerdes:
      "Up to 30 hours of continous wireles payback width ANC enable; 10-minute fast charge yield 5 hours",
    content:
      "Enjoy up to 30 hours of continuous wireless playback with ANC turned on. When you're low on power, a quick 10-minute fast charge gives you up to 5 hours of playback time.",
  },
  {
    value: "item-4",
    triggerhead: "Connectivity",
    triggerdes:
      "Low latency Bluetooth 5.3 width multipoint dual sync, and support fol lossless analog 3.5mm input",
    content:
      "Connect seamlessly with low-latency Bluetooth 5.3 featuring multipoint dual sync to easily switch between devices, alongside support for lossless audio using a traditional 3.5mm analog cable.",
  },
];

function ProductAcordion() {
  return (
    <section>
      <h2 className="text-[20px] font-bold mb-4">Tecnical Specs</h2>
      <Accordion type="multiple" defaultValue={["item-1"]} className="space-y-3">
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value} className="flex flex-col p-5 bg-surface rounded-md border">
            <AccordionTrigger className="">
              <div className="flex flex-col gap-3">
                <h3 className="text-[14px] font-bold">{item.triggerhead}</h3>
                <p className="text-[13px] text-gray">{item.triggerdes}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default ProductAcordion;
