"use client";
import type { SbBlokData } from "@storyblok/react/rsc";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, locations, type ContactSchemaType } from "@/schemas";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { H2 } from "@/components/ui/typography";

export type ContactProps = {
  component: "contact";
} & SbBlokData;

export function Contact(props: ContactProps) {
  const [validation, setValidation] = useState<{
    status: "idle" | "awaiting" | "error" | "success";
    message: string;
  }>({
    status: "idle",
    message: "",
  });

  const form = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = async (data: ContactSchemaType) => {
    setValidation({ status: "awaiting", message: "" });

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setValidation({
      status: "success",
      message: "",
    });
  };

  return (
    <section className="container">
      {validation.status !== "success" ? (
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto flex max-w-screen-sm flex-col items-center gap-6"
          >
            <div className="w-full">
              <FormField
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{"Имена*"}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={validation.status === "awaiting"}
                        type="text"
                        placeholder="Вашето име"
                      />
                    </FormControl>
                    {errors.name && (
                      <FormMessage>{errors.name.message}</FormMessage>
                    )}
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full">
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{"Имейл*"}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={validation.status === "awaiting"}
                        type="email"
                        placeholder="your.email@example.com"
                      />
                    </FormControl>
                    {errors.email && (
                      <FormMessage>{errors.email.message}</FormMessage>
                    )}
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full">
              <FormField
                control={control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{"Име на компания"}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={validation.status === "awaiting"}
                        type="text"
                        placeholder="Комапния"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full">
              <FormField
                control={control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{"Телефон за връзка"}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={validation.status === "awaiting"}
                        type="phone"
                        placeholder="888888888"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{"Локация"}</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Изберете локация" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full">
              <FormField
                control={control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{"Съобщение*"}</FormLabel>
                    <FormControl>
                      <Textarea
                        className="aspect-[21/9]"
                        placeholder="Вашето Съобщение"
                        {...field}
                      />
                    </FormControl>
                    {errors.message && (
                      <FormMessage>{errors.message.message}</FormMessage>
                    )}
                  </FormItem>
                )}
              />
            </div>

            <Button
              disabled={validation.status === "awaiting"}
              type="submit"
              className="w-full"
            >
              {"Изпрати"}
            </Button>
          </form>
        </Form>
      ) : (
        <SuccessMessage />
      )}
    </section>
  );
}

function SuccessMessage() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
      <H2 className="text-center text-primary">
        {"Успешно изпратихте съобщение!"}
      </H2>
      <p className="max-w-screen-md text-center text-lg">
        {
          "Ние ще се свържем с вас възможно най-скоро. Междувременно можете да разгледате нашия уебсайт и да разгледате най-новите ни проекти."
        }
      </p>
    </div>
  );
}
