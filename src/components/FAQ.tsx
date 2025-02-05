import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of development services including web development, mobile app development, and AI integration.",
    },
    {
      question: "How can I get started?",
      answer: "Getting started is easy! Simply reach out through our contact form, and we'll schedule a consultation to discuss your project needs.",
    },
    {
      question: "What technologies do you use?",
      answer: "We use cutting-edge technologies including React, Node.js, TypeScript, and various AI tools to deliver modern and efficient solutions.",
    },
    {
      question: "Do you offer support after project completion?",
      answer: "Yes, we provide ongoing support and maintenance services to ensure your project continues to run smoothly after launch.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};