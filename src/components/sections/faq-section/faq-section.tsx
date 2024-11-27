import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { H2 } from "@/components/ui/typography";

export type FaqSectionProps = {
  component: "faqSection";
  title: string;
  questions: QuestionAnswerProps[];
} & SbBlokData;

type QuestionAnswerProps = {
  question: string;
  answer: string;
} & SbBlokData;

export function FaqSection({ title, questions, ...props }: FaqSectionProps) {
  return (
    <section {...storyblokEditable(props)} className="container">
      <div className="container">
        <H2>{title}</H2>
        {questions.map((q, index) => (
          <Accordion key={index} type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="hover:text-foreground/60 hover:no-underline">
                {q.question}
              </AccordionTrigger>
              <AccordionContent>{q.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
